# Express, React, Flow, and Webpack Starter

#### Table of Contents
- [Overview](#overview)
  - [Client](#client)
  - [Server](#server)
- [Setup](#setup)
  - [Development](#development)
  - [Production](#production)

---

## Overview
This project uses Express to serve a JSON API and a React front-end client.

### Client
In development the client is served from memory by Webpack Dev Server. This enables hot module reloading. In production the client is served by Express from the build directory.

### Server
The Express server serves both the API `/api` and the client `/` in production. Since the client uses Webpack Dev Server it is not necessary for the Express server to handle this in development.

## Setup
This project requires Yarn. Install dependencies:

```
yarn
```

### Development
Run the server:
```
yarn server:dev
```

The API will run on `localhost:8080/api`

Run the client:
```
yarn client:dev
```

Access the client at `localhost:9000`

### Production
Build the project:

```
yarn build
```

Run the app:
```
yarn start
```

Access the app at `localhost:8080`
