/** @format */

import express from 'express'

import routers from './routes'
import { graphqlServer } from './graphql'

const app = express()

app.use(routers)

// Add graphql to server
graphqlServer.applyMiddleware({ app, path: '/api/graphql' })

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server listening on port ${port}`))
