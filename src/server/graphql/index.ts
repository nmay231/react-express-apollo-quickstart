/** @format */

import { ApolloServer } from 'apollo-server-express'

import { importSchema } from 'graphql-import'
import { resolvers } from './resolvers'

export const graphqlServer = new ApolloServer({
    typeDefs: importSchema('src/graphql/schema.graphql'),
    resolvers,
    formatError(err) {
        // Remove stacktrace in production
        if (process.env.NODE_ENV === 'production') {
            err.extensions.exception = undefined
        }
        return err
    },
    context({ req }) {
        // Recover token off of req and authenticate here
        // Or still use passport as middleware, but get user from req.user
        // IMPORTANT: You can update the context type in src/schema/codegen.yml
        return {
            user: {
                id: 1,
                role: 'user',
            },
        }
    },
})
