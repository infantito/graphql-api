import 'graphql-import-node'
import * as author from './author.graphql'
import * as book from './book.graphql'
import * as query from './query.graphql'

const typeDefs = [author, book, query]

export default typeDefs
