import { ApolloServer } from 'apollo-server-express'
import depthLimit from 'graphql-depth-limit'
import { isDevelopment } from 'constants/env'
import { DEPTH_LIMIT } from 'constants/server'
import schema from 'schema'

const server = new ApolloServer({
  schema,
  context: () => {
    const context = {}

    return { ...context }
  },
  playground: isDevelopment,
  validationRules: [depthLimit(DEPTH_LIMIT)],
})

export default server
