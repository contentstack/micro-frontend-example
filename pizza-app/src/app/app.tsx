import React, {
  ReactComponentElement,
  useContext,
} from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import { MicrofrontendMetaContext } from '../lib/microfrontend-meta-context';
import { AllPizzas } from './all-pizzas';
import { NavLayout } from './nav-layout';
import { PizzaMenu } from './pizza-menu';
import { VeganPizza } from './vegan-pizza';

export type Crumb = {
  name: string,
  link?: string,
};

const HomeCrumb: Crumb = {
  name: 'Home',
  link: '/',
};

const PizzaCrumb: Crumb = {
  name: 'Pizzas',
  link: '/pizza',
};

const VeganPizzaCrumb: Crumb = {
  name: 'Vegan Pizzas',
  link: '/pizza/vegan',
};

const AllPizzaCrumb: Crumb = {
  name: 'All Pizzas',
  link: '/pizza/all-pizzas',
};

const baseCrumbs = [HomeCrumb, PizzaCrumb];

export const App = (): ReactComponentElement<any> => {
  const microfrontendMeta = useContext(MicrofrontendMetaContext);

  return (
    <Switch>
      <Route exact path={microfrontendMeta.relativeUrl}>
        <NavLayout crumbs={baseCrumbs}>
          <PizzaMenu relativeUrl={microfrontendMeta.relativeUrl} />
        </NavLayout>
      </Route>
      <Route exact path={`${microfrontendMeta.relativeUrl}/vegan`}>
        <NavLayout crumbs={baseCrumbs.concat([VeganPizzaCrumb])}>
          <VeganPizza />
        </NavLayout>
      </Route>
      <Route exact path={`${microfrontendMeta.relativeUrl}/all-pizzas`}>
        <NavLayout crumbs={baseCrumbs.concat([AllPizzaCrumb])}>
          <AllPizzas />
        </NavLayout>
      </Route>
    </Switch>
  );
};
