import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import createStore from 'store/createStore';
import registerServiceWorker from 'registerServiceWorker';
import createHistory from 'history/createBrowserHistory';

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__;
const history = createHistory();
const store = createStore(initialState, history);

// const persistConfig = {
//   key: 'root',
//   store,
// }
//
// persistStore(store, { blacklist: ['location'] })
// const persistedReducer = persistReducer(persistConfig, rootReducer)
//
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }
// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root');

let render = () => {
  import('containers/App/App')
    .then(module => module.default)
    .then(App => {
      ReactDOM.render(<App store={store} history={history} />, MOUNT_NODE);
    });
};
render();
registerServiceWorker();
