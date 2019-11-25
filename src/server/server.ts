/** @format */

import express from 'express'

import './loadEnvironment'

import routers from './routes'
import { graphqlServer } from './graphql'

const app = express()

app.use(routers)

// Add graphql to server
// Tip: You can visit http://localhost:3000/api/graphql to load the playground
graphqlServer.applyMiddleware({ app, path: '/api/graphql' })

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server listening on port ${port}`))
