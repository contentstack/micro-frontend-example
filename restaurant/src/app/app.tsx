import React, { ReactComponentElement } from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import { HomePage } from './components/home-page';
import { Layout } from './components/layout';
import { MicroFrontendContainer } from './components/micro-frontend-container';
import { SandwichPage } from './components/sandwich-page';
import { microfrontends } from './microfrontends';

export const App = (): ReactComponentElement<any> => {
  return (
    <Switch>
      <Layout>
        <Route exact path="/">
          <HomePage />
        </Route>
        {
          microfrontends.map(microfrontend => (
            <Route path={microfrontend.relativeUrl} key={microfrontend.divId}>
              <MicroFrontendContainer microfrontend={microfrontend} />
            </Route>
          ))
        }
        <Route path="/sandwich">
          <SandwichPage />
        </Route>
      </Layout>
    </Switch>
  );
};
