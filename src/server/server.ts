/** @format */

import express from 'express'
import path from 'path'

import './loadEnvironment'

import routers from './routes'
import { graphqlServer } from './graphql'

const app = express()

app.use(routers)

// Add graphql to server
// Tip: You can visit http://localhost:3000/api/graphql to load the playground
graphqlServer.applyMiddleware({ app, path: '/api/graphql' })

app.use(express.static('public'))

app.use('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../public/index.html')),
)

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server listening on port ${port}`))
