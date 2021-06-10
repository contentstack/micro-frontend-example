import React from 'react';

import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
      <div className="container">
        <h1 className="display-6">Menu</h1>
        <ul>
          <li>
            <Link to="/pizza">
              Pizza
            </Link>
          </li>
          <li>
            <Link to="/sandwich">
              Sandwich
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
