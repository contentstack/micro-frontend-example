import {
  compose,
  createStore,
} from 'redux';

import rootReducer from './rootReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

const configureStore = () => {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
      && compose(window.__REDUX_DEVTOOLS_EXTENSION__())
  );
  return store;
};

const store = configureStore();

export default store;
