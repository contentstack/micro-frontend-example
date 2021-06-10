import React, { useState } from 'react';

export enum LayoutController {
  CONTAINER = 'CONTAINER',
  MICROFRONTEND = 'MICROFRONTEND',
}

export const LayoutContext = React.createContext<{
  layoutController: LayoutController,
  setLayoutController: (arg: any) => any,
}>({
  layoutController: LayoutController.CONTAINER,
  setLayoutController: () => { },
});

export const Layout: React.FunctionComponent<{}> = ({ children }) => {
  const [layoutController, setLayoutController] = useState(LayoutController.CONTAINER);

  return (
    <LayoutContext.Provider value={{ layoutController, setLayoutController }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand">Restaurant</a>

          <div id="layout-nav" className="navbar-nav me-auto">
            {
              layoutController === LayoutController.CONTAINER ?
                <ol className="breadcrumb mb-2 mb-lg-0">
                  <li className="breadcrumb-item nav-item active" aria-current="page">
                    Home
                </li>
                </ol> :
                null
            }
          </div>
        </div>
      </nav>
      {children}
    </LayoutContext.Provider>
  )
}
