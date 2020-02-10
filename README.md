# Fossil VN application test

This application is using technical stack:
 - Typescript
 - ReactJS & React-router
 - ~~ParcelJS (for the time being) to simplify the setting up process~~
 - Webpack bundling (with 2 profiles: dev and prod)
 - Redux + Redux-saga for state and side-effects management
 - Tailwindcss for simple, configurable, consistent and re-useable styling system
 - Simple Express server to provide data


## Installation
Run the following command to install the dependencies
```
npm install
```

## Running server to serve data
To start server at port 3000:
```
npm run start-server
```

## Running client app in development mode
To start the development mode at port 3001:
```
npm run start
```

## Building client app in production mode
```
npm run build
```

After building process, application can be updated and serve from `client/dist` directory.

If you have any concern, please contact me via: quoctrungdh@gmail.com