# Unleash your potential

An app that helps developers grow and track their progress.

[![Build Status](https://travis-ci.org/x-team/unleash.svg?branch=master)](https://travis-ci.org/x-team/unleash)
[![dependencies Status](https://david-dm.org/x-team/unleash/status.svg)](https://david-dm.org/x-team/unleash)
[![devDependency Status](https://david-dm.org/x-team/unleash/dev-status.svg)](https://david-dm.org/x-team/unleash#info=devDependencies)

## Requirements

- [Node 6.5+](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/en/)

## Setup

### Install dependencies

In order to install node dependencies run the command (it might take a while but it's one-time only):

```shell
yarn
```

### Config

Create a `config.local.js` in the root directory of the project and override or set any value provided by `config.js`. The minimal contents for the `config.local.js` file should be:

```js
module.exports = {
}
```

### Google Authentication and Firebase

Steps to get a Firebase Key for local development:

 1. Create a Firebase project in the [Firebase console](https://console.firebase.google.com/).
 2. Click Add Firebase to your web app.
 3. Note the initialization code snippet, which you will use in a minute.
 4. In the Firebase console, open the Auth section.
 5. On the Sign in method tab, enable the Google sign-in method and click Save.
 6. Update your `config.js` with your Firebase key.

### Running (development)

In the Terminal go to the application folder and type:

```shell
yarn start
```

Wait until webpack builds the application (watch the progress bar on the right).

Once the application is running you can access it at [localhost:3000](http://localhost:3000).

### Building (production)

In order to build the app and generate static files just type:

```shell
yarn build
```

This will generate static files under `/build` directory and won't start any server. Those minified files are ready to be uploaded to production server where `index.html` is being served.

### Testing

In order to run tests please type:

```shell
yarn test
```

In order to run lint please type:

```shell
yarn test:lint
```
Maintained by the [developers at x-team](https://www.x-team.com) | [developer blog](https://www.x-team.com/blog/)


