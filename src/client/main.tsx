/** @format */
import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'

import App from './App'
import { client } from './utils/graphql'

render(
    <ApolloProvider client={client}>
        <App prefix="Hello" />
    </ApolloProvider>,
    document.getElementById('root'),
)
