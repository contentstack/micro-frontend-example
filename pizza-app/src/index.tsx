import React from 'react';
import ReactDOM from 'react-dom';

import {
  createBrowserHistory,
  History,
} from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { App } from './app/app';
import store from './lib/configureStore';
import {
  MicrofrontendMeta,
  MicrofrontendMetaContext,
} from './lib/microfrontend-meta-context';

declare global {
  interface Window {
    renderPizza: (
      containerID?: string,
      history?: History,
      microfrontendMeta?: { relativeUrl: string; layoutNavId: string }
    ) => void;
  }
}
// Update the name of your app over here and in index.html
window.renderPizza = (
  containerId = 'root',
  history = createBrowserHistory(),
  microfrontendMeta: MicrofrontendMeta,
) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <MicrofrontendMetaContext.Provider value={microfrontendMeta}>
          <App />
        </MicrofrontendMetaContext.Provider>
      </Router>
    </Provider>,
    document.getElementById(containerId)
  );
};
