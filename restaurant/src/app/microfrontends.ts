export type Microfrontend = {
  bundleLink: string,
  divId: string,
  relativeUrl: string,
  renderMethod: string,
}

export const microfrontends: Microfrontend[] = [
  {
    bundleLink: 'http://localhost:8081/app.bundle.js',
    divId: 'pizza-microfrontend',
    relativeUrl: '/pizza',
    renderMethod: 'renderPizza',
  }
];
