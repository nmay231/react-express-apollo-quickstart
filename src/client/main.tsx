/** @format */
import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'

import './assets/styles.scss'

import App from './App'
import { client } from './utils/graphql'

render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root'),
)
