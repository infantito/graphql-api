import { ApolloServer } from 'apollo-server-express'
import depthLimit from 'graphql-depth-limit'
import { isDevelopment } from 'constants/env'
import { DEPTH_LIMIT } from 'constants/server'
import schema from 'schema'

const server = new ApolloServer({
  schema,
  context: ({ req, connection }) => {
    const context = { req }

    if (connection) {
      return { ...context, ...connection.context }
    }

    return { ...context }
  },
  playground: isDevelopment,
  validationRules: [depthLimit(DEPTH_LIMIT)],
})

export default server
