<!-- @format -->

# Setup

```
$ git clone https://github.com/nmay231/react-express-apollo-quickstart.git my-amazing-app
$ cd $_
$ npm install
```

# Running

You can get up and running with `npm run dev` and by visiting `http://localhost:4000`.

Or use sweet hot-reloading by running `npm run client` and `npm run server` in separate terminals. Go to `http://localhost:3000`.

Note: When using `run dev`, the api and client listens to port 4000 (with webpack-dev-server). Hot reloading has the api server listening to 4000 but the client server listens to 3000.

Deployment works with a simple `npm run build` then `npm start`.

## Other scripts

-   `generate` auto-generates a typescript file from your graphql schema. Must be run manually to refresh types when using hot-reloading.
-   `test` That one thing that's kinda important, I think...

# Notable files

-   `config/tsconfig.*.json` - Typescript configuration for client and server (the root level `tsconfig.json` is just to compile `webpack.config.ts`)
-   `config/.env` - Provides environment variables in development.
-   `src/graphql/schema.graphql` and `/codegen.yml` - Your schema and config file to autogenerate types (read up the docs for code gen [here](https://graphql-code-generator.com/)).
-   `src/client/utils/graphql/index.ts` - Defines your GraphQL client and how you authenticate the front-end. You might need to upgrade from apollo-boost if you want more advanced features in GraphQL like subscriptions. [How to migrate from apollo-boost](https://www.apollographql.com/docs/react/migrating/boost-migration/).
