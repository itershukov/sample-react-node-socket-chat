/**
 * Created by itersh on 06.03.2018.
 */
import { compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReduxThunk from 'redux-thunk';
import wormhole from 'redux-subspace-wormhole';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import { applyMiddleware, applyToRoot } from 'redux-subspace';
import { createStore as createDynamicReduxStore } from 'redux-dynamic-reducer';

import rootSaga from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const createStore = (initialState = {}, history) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [
    ReduxThunk,
    sagaMiddleware,
    wormhole(state => state.configuration, 'configuration'),
    routerMiddleware(history)
  ];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];
  let composeEnhancers = compose;

  if (process.env.NODE_ENV === 'development') {
    middleware.push(applyToRoot(createLogger()));

    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  // ======================================================
  // Store Instantiation
  // ======================================================
  const store = createDynamicReduxStore(
    combineReducers({
      routing: routerReducer
    }),
    initialState,
    composeEnhancers(applyMiddleware(...middleware), ...enhancers)
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default createStore;
