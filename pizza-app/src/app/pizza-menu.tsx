import React from 'react';

import { Link } from 'react-router-dom';

export const PizzaMenu = ({ relativeUrl }) => {
  return (
    <div className="container">
      <h1 className="display-6">Choose the pizza you like</h1>
      <ul>
        <li>
          <Link to={`${relativeUrl}/all-pizzas`}>
            All pizzas
          </Link>
        </li>
        <li>
          <Link to={`${relativeUrl}/vegan`} style={{ marginRight: '10px' }}>
            Vegan
          </Link>
        </li>
      </ul>
    </div>
  );
}
