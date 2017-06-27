import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { IntlProvider } from 'react-intl';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from '../config/routes';
import configureStore from '../store/configureStore';
import AuthService from '../services/authService';

require('../styles/icons.css');
// Add fetch support for browsers without fetch
require('es6-promise').polyfill();
require('isomorphic-fetch');

injectTapEventPlugin();

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

// Init Firebase and Google Auth
const authService = new AuthService(store.dispatch);
authService.init();

browserHistory.listen((location) => {
  const path = (/#!(\/.*)$/.exec(location.hash) || [])[1];
  if (path) {
    history.replace(path);
  }
});

const App = () => (
  <Provider store={store}>
    <IntlProvider locale="en">
      <Router history={browserHistory}>
        {routes}
      </Router>
    </IntlProvider>
  </Provider>
);

export default App;
