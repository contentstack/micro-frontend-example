import React from 'react';

export type MicrofrontendMeta = {
  relativeUrl: string,
  layoutNavId: string,
}

export const MicrofrontendMetaContext = React.createContext({
  relativeUrl: '/pizza',
  layoutNavId: 'layout-nav'
});
