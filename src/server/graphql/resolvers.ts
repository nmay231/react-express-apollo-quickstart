/** @format */

import {
    Resolvers,
    QueryResolvers,
    MutationResolvers,
    UserResolvers,
} from '../../graphql/schema'

const Query: QueryResolvers = {
    echo: (root, { input }, { user }, info) => input,
    hello: (root, {}, { user }, info) => 'world',
    test: (root, {}, { user }, info) => ({
        needed: Boolean('Probably not'),
        usefulness: 0,
    }),
    isPrettyCool: () => true,
    me: (root, {}, { user }, info) => ({
        id: user.id.toString(), // GraphQL ids are always strings
        role: user.role,
    }),
}

const Mutation: MutationResolvers = {
    doSomethingWith: (root, { something }) =>
        `Totally updated the database with ${something}...`,
}

// To update individual fields for type User
const User: UserResolvers = {
    role: (user, {}, { user: signedIn }) =>
        signedIn.id === 1
            ? 'admin/all-powerful/owner-of-the-universe'
            : user.role,
}

export const resolvers: Resolvers = {
    Query,
    Mutation,
    User,
}
