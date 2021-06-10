import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

import { MicrofrontendMetaContext } from '../lib/microfrontend-meta-context';
import { Crumb } from './app';

export const NavLayout: React.FunctionComponent<{ crumbs: Crumb[] }> = ({ children, crumbs }) => {
  const microfrontendMeta = useContext(MicrofrontendMetaContext);

  return (
    <>
      {
        ReactDOM.createPortal(
          <ol className="breadcrumb mb-2 mb-lg-0">
            {
              crumbs.map(crumb => (
                <li className="breadcrumb-item nav-item active" aria-current="page">
                  <Link to={crumb.link}>{crumb.name}</Link>
                </li>
              ))
            }
          </ol>,
          document.getElementById(microfrontendMeta.layoutNavId),
        )
      }
      {children}
    </>
  );
}
