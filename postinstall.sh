#!/bin/bash

if [ $NODE_ENV ]; then
  if [ $NODE_ENV == production ]; then
    echo "module.exports = { firebaseApiKey: '$FIRE_API_KEY',firebaseAuthDomain: '$FIRE_AUTH_DOMAIN',firebaseDatabaseURL: '$FIRE_DB_URL',firebaseStorageBucket: '',firebaseMessagingSenderId: '$FIRE_SENDER_ID',}" > config.local.js
    yarn build
  fi
fi
