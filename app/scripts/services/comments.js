'use strict';

/**
 * @ngdoc service
 * @name unleashApp.commentsService
 * @description
 * # comments
 * Factory in the unleashApp.
 */
angular.module('unleashApp')
  .factory('commentsService', function ($window, FBURL, $firebaseObject, $firebaseArray, $q, growl, cardsService, userService, mailService, slackService) {
    var ref = null;
    var currentUser = null;
    var currentUserId = null;
    var card = {};
    var comments = [];

    return {
      /**
       * Setup the service
       * @param userId ID of the owner of the card
       * @param cardId Card ID
       * @returns {*}
       */
      setup: function(userId, cardId) {
        return $q(function(resolve, reject) {

          if(userId && cardId) {
            // Initialize setup

            ref = new $window.Firebase(FBURL).child('users').child(userId).child('cards').child(cardId);
            card = $firebaseObject(ref);
            comments = $firebaseArray(ref.child('comments'));

            currentUserId = userId;

            userService.getUserDetails(currentUserId).then(function(data) {
              currentUser = data.username;
            });

            comments.$loaded().then(function() {
              resolve();
            });
          }

          else if(currentUserId) {
            // Setup has already been done
            resolve();
          }

          else {
            growl.error('You need to setup the comments service first.');

            reject();
          }

        });
      },

      /**
       * List comments
       * @returns {Promise} Comments
       */
      list: function() {
        var self = this;

        return $q(function(resolve) {
          self.setup().then(function() {
            resolve(comments);
          });
        });
      },

      /**
       * Add a comment
       * @param data An array containing a comment, its author and the card owner
       */
      add: function(data) {
        if (data.message) {
          // push a message to the end of the array
          comments.$add({
            text: data.message,
            author: data.author.name,
            timestamp: $window.Firebase.ServerValue.TIMESTAMP
          })
            .then(function () {
              // Notify Card Owner if someone else made a comment
              if (data.cardOwner.name !== data.author.name) {
                slackService.notifyCardOwner(data);
                return mailService.notifyCardOwner(data);
              }
            })
            .finally(function () {
              if (data.author.name !== currentUser) {
                cardsService.incrementCommentCount(ref);
              }
            })
            // display any errors
            .catch(growl.error);
        }
      },

      /**
       * Add a reply to a comment
       * @param data Object containing a reply comment, its author, card owner and author of the parent comment
       */
      addReply: function(data) {
        if (data.message) {
          var replies = $firebaseArray(ref.child('comments').child(data.parent.id).child('replies'));
          var mailPromises = [];
          var slackPromises = [];

          var cardOwner = data.cardOwner.name,
              parentAuthor = data.parent.author.name; // Author of the comment, to which someone replied


          // Notify Card Owner only if someone else replied. Do not send, if parentAuthor == cardOwner
          if (data.author.name !== cardOwner && parentAuthor !== cardOwner) {
            mailPromises.push( mailService.notifyCardOwnerReply(data));
            slackPromises.push( slackService.notifyCardOwnerReply(data));
          }
          // Notify Comment Author if someone else replied
          if (parentAuthor !== data.author.name) {
            mailPromises.push( mailService.notifyCommentAuthor(data));
            slackPromises.push( slackService.notifyCommentAuthor(data));
          }

          replies.$add({
            text: data.message,
            author: data.author.fullName,
            timestamp: $window.Firebase.ServerValue.TIMESTAMP
          })
            .then(function () {
              if ( replies.length > 1 ) {
                var previousAuthor = replies[ replies.length - 2 ].author.name;

                return userService.getUserUid( previousAuthor );
              }
            })
            .then(userService.getUserDetails)
            .then(function(previousAuthor) {
              previousAuthor.name = previousAuthor.username;

              if ( previousAuthor.name !== data.author.name ) {
                mailPromises.push( mailService.notifyReplyAuthor(data, previousAuthor));
                slackPromises.push( slackService.notifyReplyAuthor(data, previousAuthor));
              }
            })
            .then(function () {
              return $q.all([].concat(mailPromises, slackPromises));
            })
            // display any errors
            .catch(growl.error);
        }
      }
    };
  });
