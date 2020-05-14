/** @format */

import { ApolloServer } from 'apollo-server-express'

import { importSchema } from 'graphql-import'
import { resolvers } from './resolvers'

export const graphqlServer = new ApolloServer({
    typeDefs: importSchema('src/graphql/schema.graphql'),
    resolvers,
    // Remove stacktrace in production
    debug: process.env.NODE_ENV !== 'production',
    formatError(err) {
        // Optionally log/rewrite errors
	console.error(err)
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
