import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

const rootEl = document.getElementById('app');
const render = Component =>
  ReactDOM.render(  // eslint-disable-line react/no-render-return-value
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl,
  );

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default; // eslint-disable-line global-require
    render(NextApp);
  });
}
