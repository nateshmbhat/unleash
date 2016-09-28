'use strict';

/**
 * @ngdoc directive
 * @name unleashApp.directive:unleashIconModal
 * @description
 * # unleash icon modal
 */

angular.module('unleashApp')
  .directive('unleashIconsModal', function() {
    var iconsBase = ['icon-home', 'icon-home2', 'icon-home3', 'icon-office', 'icon-newspaper', 'icon-pencil', 'icon-pencil2',
                     'icon-quill', 'icon-pen', 'icon-blog', 'icon-eyedropper', 'icon-droplet', 'icon-paint-format', 'icon-image',
                     'icon-images', 'icon-camera', 'icon-headphones', 'icon-music', 'icon-play', 'icon-film', 'icon-video-camera',
                     'icon-dice', 'icon-pacman', 'icon-spades', 'icon-clubs', 'icon-diamonds', 'icon-bullhorn', 'icon-connection',
                     'icon-podcast', 'icon-feed', 'icon-mic', 'icon-book', 'icon-books', 'icon-library', 'icon-file-text', 'icon-profile',
                     'icon-file-empty', 'icon-files-empty', 'icon-file-text2', 'icon-file-picture', 'icon-file-music', 'icon-file-play',
                     'icon-file-video', 'icon-file-zip', 'icon-copy', 'icon-paste', 'icon-stack', 'icon-folder', 'icon-folder-open',
                     'icon-folder-plus', 'icon-folder-minus', 'icon-folder-download', 'icon-folder-upload', 'icon-price-tag', 
                     'icon-price-tags', 'icon-barcode', 'icon-qrcode', 'icon-ticket', 'icon-cart', 'icon-coin-dollar', 'icon-coin-euro',
                     'icon-coin-pound', 'icon-coin-yen', 'icon-credit-card', 'icon-calculator', 'icon-lifebuoy', 'icon-phone', 
                     'icon-phone-hang-up', 'icon-address-book', 'icon-envelop', 'icon-pushpin', 'icon-location', 'icon-location2',
                     'icon-compass', 'icon-compass2', 'icon-map', 'icon-map2', 'icon-history', 'icon-clock', 'icon-clock2', 'icon-alarm',
                     'icon-bell', 'icon-stopwatch', 'icon-calendar', 'icon-printer', 'icon-keyboard', 'icon-display', 'icon-laptop', 
                     'icon-mobile', 'icon-mobile2', 'icon-tablet', 'icon-tv', 'icon-drawer', 'icon-drawer2', 'icon-box-add', 
                     'icon-box-remove', 'icon-download', 'icon-upload', 'icon-floppy-disk', 'icon-drive', 'icon-database', 'icon-undo',
                     'icon-bubble2', 'icon-bubbles3', 'icon-bubbles4', 'icon-user', 'icon-users', 'icon-user-plus', 'icon-user-minus',
                     'icon-user-check', 'icon-user-tie', 'icon-quotes-left', 'icon-quotes-right', 'icon-hour-glass', 'icon-spinner',
                     'icon-spinner2', 'icon-spinner3', 'icon-spinner4', 'icon-spinner5', 'icon-spinner6', 'icon-spinner7', 'icon-spinner8',
                     'icon-spinner9', 'icon-spinner10', 'icon-spinner11', 'icon-binoculars', 'icon-search', 'icon-zoom-in', 'icon-zoom-out',
                     'icon-enlarge', 'icon-shrink', 'icon-enlarge2', 'icon-shrink2', 'icon-key3', 'icon-key2', 'icon-lock', 'icon-unlocked',
                     'icon-wrench', 'icon-equalizer', 'icon-equalizer2', 'icon-cog', 'icon-cogs', 'icon-hammer', 'icon-magic-wand',
                     'icon-aid-kit', 'icon-bug', 'icon-pie-chart', 'icon-stats-dots', 'icon-stats-bars', 'icon-stats-bars2', 'icon-trophy',
                     'icon-gift', 'icon-glass', 'icon-glass2', 'icon-mug', 'icon-spoon-knife', 'icon-leaf', 'icon-rocket', 'icon-meter',
                     'icon-meter2', 'icon-hammer2', 'icon-fire', 'icon-lab', 'icon-magnet', 'icon-bin', 'icon-bin2', 'icon-briefcase',
                     'icon-airplane', 'icon-truck', 'icon-road', 'icon-accessibility', 'icon-target', 'icon-shield', 'icon-power', 
                     'icon-switch', 'icon-power-cord', 'icon-clipboard', 'icon-list-numbered', 'icon-list', 'icon-list2', 'icon-tree',
                     'icon-menu', 'icon-menu2', 'icon-menu3', 'icon-menu4', 'icon-cloud2', 'icon-cloud-download', 'icon-cloud-upload', 
                     'icon-cloud-check', 'icon-download2', 'icon-upload2', 'icon-download3', 'icon-upload3', 'icon-sphere', 'icon-earth',
                     'icon-link', 'icon-flag', 'icon-attachment', 'icon-eye', 'icon-eye-plus', 'icon-eye-minus', 'icon-eye-blocked',
                     'icon-bookmark', 'icon-bookmarks', 'icon-sun', 'icon-contrast', 'icon-brightness-contrast', 'icon-star-empty', 
                     'icon-star-half', 'icon-star-full', 'icon-heart', 'icon-heart-broken', 'icon-man', 'icon-woman', 'icon-man-woman',
                     'icon-happy', 'icon-happy2', 'icon-smile', 'icon-smile2', 'icon-tongue', 'icon-tongue2', 'icon-sad', 'icon-sad2',
                     'icon-wink', 'icon-wink2', 'icon-grin', 'icon-grin2', 'icon-cool', 'icon-cool2', 'icon-angry', 'icon-angry2', 
                     'icon-evil', 'icon-evil2', 'icon-shocked', 'icon-shocked2', 'icon-baffled', 'icon-baffled2', 'icon-confused',
                     'icon-confused2', 'icon-neutral', 'icon-neutral2', 'icon-hipster', 'icon-hipster2', 'icon-wondering', 
                     'icon-wondering2', 'icon-sleepy', 'icon-sleepy2', 'icon-frustrated', 'icon-frustrated2', 'icon-crying', 'icon-crying2',
                     'icon-point-up', 'icon-point-right', 'icon-point-down', 'icon-point-left', 'icon-warning', 'icon-notification',
                     'icon-question', 'icon-plus', 'icon-minus', 'icon-info', 'icon-cancel-circle', 'icon-blocked', 'icon-cross', 
                     'icon-checkmark', 'icon-checkmark2', 'icon-spell-check', 'icon-enter', 'icon-exit', 'icon-play2', 'icon-pause',
                     'icon-stop', 'icon-previous', 'icon-next', 'icon-backward', 'icon-forward2', 'icon-play3', 'icon-pause2', 'icon-stop2',
                     'icon-backward2', 'icon-forward3', 'icon-first', 'icon-last', 'icon-previous2', 'icon-next2', 'icon-eject', 
                     'icon-volume-high', 'icon-volume-medium', 'icon-volume-low', 'icon-volume-mute', 'icon-volume-mute2', 
                     'icon-volume-increase', 'icon-volume-decrease', 'icon-loop', 'icon-loop2', 'icon-infinite', 'icon-shuffle',
                     'icon-arrow-up-left', 'icon-arrow-up', 'icon-arrow-up-right', 'icon-arrow-right', 'icon-arrow-down-right',
                     'icon-arrow-down', 'icon-arrow-down-left', 'icon-arrow-left', 'icon-arrow-up-left2', 'icon-arrow-up2', 
                     'icon-arrow-up-right2', 'icon-arrow-right2', 'icon-arrow-down-right2', 'icon-arrow-down2', 'icon-arrow-down-left2',
                     'icon-arrow-left2', 'icon-circle-up', 'icon-circle-right', 'icon-circle-down', 'icon-circle-left', 'icon-tab',
                     'icon-move-up', 'icon-move-down', 'icon-sort-alpha-asc', 'icon-sort-alpha-desc', 'icon-sort-numeric-asc', 
                     'icon-sort-numberic-desc', 'icon-sort-amount-asc', 'icon-sort-amount-desc', 'icon-command', 'icon-shift', 
                     'icon-ctrl', 'icon-opt', 'icon-checkbox-checked', 'icon-checkbox-unchecked', 'icon-radio-checked', 'icon-radio-checked2',
                     'icon-radio-unchecked', 'icon-crop', 'icon-make-group', 'icon-ungroup', 'icon-scissors', 'icon-filter', 
                     'icon-font', 'icon-ligature', 'icon-ligature2', 'icon-text-height', 'icon-text-width', 'icon-font-size', 'icon-bold',
                     'icon-underline', 'icon-italic', 'icon-strikethrough', 'icon-omega', 'icon-sigma', 'icon-page-break', 'icon-superscript',
                     'icon-subscript', 'icon-superscript2', 'icon-subscript2', 'icon-text-color', 'icon-pagebreak', 'icon-clear-formatting', 
                     'icon-table', 'icon-table2', 'icon-insert-template', 'icon-pilcrow', 'icon-ltr', 'icon-rtl', 'icon-section', 
                     'icon-paragraph-left', 'icon-paragraph-center', 'icon-paragraph-right', 'icon-paragraph-justify', 'icon-indent-increase',
                     'icon-indent-decrease', 'icon-share', 'icon-new-tab', 'icon-embed', 'icon-embed2', 'icon-terminal', 'icon-share2',
                     'icon-mail', 'icon-mail2', 'icon-mail3', 'icon-mail4', 'icon-google', 'icon-google-plus', 'icon-google-plus2',
                     'icon-google-plus3', 'icon-google-drive', 'icon-facebook', 'icon-facebook2', 'icon-facebook3', 'icon-ello', 'icon-instagram',
                     'icon-twitter', 'icon-twitter2', 'icon-twitter3', 'icon-feed2', 'icon-feed3', 'icon-feed4', 'icon-youtube', 'icon-youtube2',
                     'icon-youtube3', 'icon-twitch', 'icon-vimeo', 'icon-vimeo2', 'icon-vimeo3', 'icon-lanyrd', 'icon-flickr', 'icon-flickr2',
                     'icon-flickr3', 'icon-flickr4', 'icon-picassa', 'icon-picassa2', 'icon-dribbble', 'icon-dribbble2', 'icon-dribbble3', 
                     'icon-forrst', 'icon-forrst2', 'icon-deviantart', 'icon-deviantart2', 'icon-steam', 'icon-steam2', 'icon-dropbox', 
                     'icon-onedrive', 'icon-github', 'icon-github2', 'icon-github3', 'icon-github4', 'icon-github5', 'icon-wordpress', 
                     'icon-wordpress2', 'icon-joomla', 'icon-blogger', 'icon-blogger2', 'icon-tumblr', 'icon-tumblr2', 'icon-yahoo', 'icon-tux',
                     'icon-apple', 'icon-finder', 'icon-android', 'icon-windows', 'icon-windows8', 'icon-soundcloud', 'icon-soundcloud2',
                     'icon-skype', 'icon-reddit', 'icon-linkedin', 'icon-linkedin2', 'icon-lastfm', 'icon-lastfm2', 'icon-delicious',
                     'icon-stumbleupon', 'icon-stumbleupon2', 'icon-stackoverflow', 'icon-pinterest', 'icon-pinterest2', 'icon-xing',
                     'icon-xing2', 'icon-flattr', 'icon-foursquare', 'icon-paypal', 'icon-paypal2', 'icon-paypal3', 'icon-yelp', 'icon-file-pdf',
                     'icon-file-openoffice', 'icon-file-word', 'icon-file-excel', 'icon-libreoffice', 'icon-html5', 'icon-html52', 'icon-css3',
                     'icon-git', 'icon-svg', 'icon-codepen', 'icon-chrome', 'icon-firefox', 'icon-IE', 'icon-opera', 'icon-safari', 'icon-IcoMoon',
                     'icon-heart2', 'icon-cloud', 'icon-star', 'icon-tv2', 'icon-sound', 'icon-video', 'icon-trash', 'icon-user2', 'icon-key',
                     'icon-search2', 'icon-settings', 'icon-camera2', 'icon-tag', 'icon-lock2', 'icon-bulb', 'icon-pen2', 'icon-diamond',
                     'icon-display2', 'icon-location3', 'icon-eye2', 'icon-bubble3', 'icon-stack2', 'icon-cup', 'icon-phone2', 'icon-news',
                     'icon-mail5', 'icon-like', 'icon-photo', 'icon-note', 'icon-clock3', 'icon-paperplane', 'icon-params', 'icon-banknote',
                     'icon-data', 'icon-music2', 'icon-megaphone', 'icon-study', 'icon-lab2', 'icon-food', 'icon-t-shirt', 'icon-fire2',
                     'icon-clip', 'icon-shop', 'icon-calendar2', 'icon-wallet', 'icon-vynil', 'icon-truck2', 'icon-world']; 
  

    var showModal = function (scope, element, attrs) {
      var $modal = element.find('.modal'),
          $iconContainer = element.find('.icon'),
          currentIconClass = '.' + scope.template.icon;

      $modal.addClass('view');

      if(currentIconClass !== '.') {
        $modal.find(currentIconClass).parent().addClass('current');
      }
      
      /*
       * bind modal events
       */
      $modal.find('.modal__icon').on('click', function () {
        if(attrs.config === 'edit' && scope.updated) {
          scope.updated.icon = this.children[0].dataset.icon;
        } else if (attrs.config === 'edit') {
          scope.template.icon = this.children[0].dataset.icon;
        }

        $iconContainer[0].children[0].className = (this.children[0].dataset.icon);
        $modal.removeClass('view');
        $modal.find('.modal__icon').unbind('click');

        if(currentIconClass !== '.') {
          $modal.find(currentIconClass).parent().removeClass('current');
        }
      });
    };

    return {
      templateUrl: 'views/partials/templateIconsModal.html',
      replace: false,
      link: function templateIconsModal(scope, element, attrs) {

        scope.showModal = function () {
          showModal(scope, element, attrs);
        };
        
        /*
         * When adding template set default value
         */
        if(attrs.config === 'add') {
          scope.template.icon = 'icon-home3';
        }

        scope.template.iconsBase = iconsBase;
      }
    };
  });
