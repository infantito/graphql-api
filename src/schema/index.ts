import 'graphql-import-node'
import { GraphQLSchema } from 'graphql'
import { makeExecutableSchema } from 'apollo-server-express'
import typeDefs from './type-defs'
import resolvers from './resolvers'

const schemas: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

export default schemas
