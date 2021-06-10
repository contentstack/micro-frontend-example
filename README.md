# micro-frontend example

This repository serves to demonstrate an example of micro-frontend implementation. It consists of the following apps in the respective directories:

- restaurant (container app)
- pizza-app (micro-frontend app)

The example is of a restaurant menu, where the `pizza` and `sandwich` are two sections. The `pizza` section is served as a micro-frontend while the `sandwich` section is not.

## Getting Started

### For the impatient: `docker-compose`

You can use `docker-compose` to start the setup quickly. Run the following command:

```
$ docker-compose up
```

### Starting the container app: restaurant

Navigate to the `restaurant` directory and run the following:

```
$ npm install
$ npm start
```

The app will be available at `http://localhost:8080`.

### Starting the micro-frontend: `pizza-app`

You can similarly navigate to the `pizza-app` directory and run the following commands to start the micro-frontend. It will serve up the micro-frontend JavaScript bundle at `http://localhost:8081/app.bundle.js`.

```
$ npm install
$ npm start
```

## Rendering outside the micro-frontend frame

In this example, you can see how the `pizza-app` micro-frontend needs to control breadcrumbs that lie outside the micro-frontend frame:

![micro-frontend-breadcrumbs](https://github.com/contentstack/micro-frontend-example/blob/main/.screenshots/microfrontend-breadcrumbs.png?raw=true)

It does this by using [React Portal] APIs. When rendering the micro-frontend, the container app relinquishes control of the breadcrumbs to the micro-frontend. It passes the `div` ID of the breadcrumbs section to the micro-frontend, and the micro-frontend in turn uses React Portal APIs to render it's own breadcrumbs within that section.

[React Portal]: https://reactjs.org/docs/portals.html
