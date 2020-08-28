import 'config/connection'
import express from 'express'
import compression from 'compression'
import { PORT } from 'constants/env'
import server from 'config/server'

const app = express()

app.use(compression())

server.applyMiddleware({ app, path: '/graphql', cors: true })

app.listen(PORT, () => {
  /* eslint-disable-next-line no-console */
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`,
  )
})
