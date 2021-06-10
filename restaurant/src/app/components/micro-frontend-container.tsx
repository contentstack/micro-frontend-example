import React, {
  useContext,
  useEffect,
} from 'react';
import ReactDOM from 'react-dom';

import { useHistory } from 'react-router';

import { Microfrontend } from '../microfrontends';
import {
  LayoutContext,
  LayoutController,
} from './layout';

const MicroFrontendContainer = ({ microfrontend }: { microfrontend: Microfrontend }) => {
  const history = useHistory();
  const layoutContext = useContext(LayoutContext);

  useEffect(() => {
    const scriptId = `script-${microfrontend.divId}`;
    if (document && document.getElementById(scriptId)) {
      renderMicrofrontendScreen();
      return cleanup;
    }
    const script = document.createElement('script');
    script.id = scriptId;
    script.crossOrigin = '';
    script.src = microfrontend.bundleLink;
    script.onload = renderMicrofrontendScreen;
    document.head.appendChild(script);

    return cleanup;
  }, []);

  const cleanup = () => {
    const microfrontendDiv = document.getElementById(microfrontend.divId);
    if (microfrontendDiv) {
      ReactDOM.unmountComponentAtNode(microfrontendDiv);
    }
    layoutContext.setLayoutController(LayoutController.CONTAINER);
  };

  const renderMicrofrontendScreen = () => {
    layoutContext.setLayoutController(LayoutController.MICROFRONTEND);
    let microfrontendMeta = {
      relativeUrl: microfrontend.relativeUrl,
      layoutNavId: "layout-nav",
    };
    (window as any)[microfrontend.renderMethod](microfrontend.divId, history, microfrontendMeta);
  };

  return (
    <>
      <main id={microfrontend.divId} />
    </>
  )
}

export { MicroFrontendContainer };