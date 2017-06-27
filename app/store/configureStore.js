import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

const logger = createLogger();
const middleware = [thunk];
let applyMiddlewareConfig = applyMiddleware(...middleware);

if (process.env.NODE_ENV !== 'production') {
  applyMiddlewareConfig = compose(
    applyMiddleware(...middleware, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  );
}

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddlewareConfig);

  if (module.hot) {
    // Enable webpack hot module replacement for reducers
    module.hot.accept('../reducers/rootReducer', () => {
      const nextReducer = require('../reducers/rootReducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
