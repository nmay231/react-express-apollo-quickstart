/** @format */

import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

const insertTokenHere = 'Yellow!'

export const client = new ApolloClient({
    uri: 'api/graphql',
    fetch,
    request: (operation) => {
        operation.setContext({
            headers: {
                authorization: `Bearer ${insertTokenHere}`,
            },
        })
    },
})
