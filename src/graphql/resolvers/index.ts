import { GraphQLResolveInfo } from 'graphql'
import { IResolvers } from 'apollo-server-express'
import { getFieldsFromInfo } from 'utils'
import {
  AuthorArgs,
  BookArgs,
  Context,
  AuthorInstance,
  BookInstance,
  NoArgs,
} from '@/@types/schemas/resolvers'

const resolvers: IResolvers<void, Context> = {
  Query: {
    async author(
      _: void,
      args: AuthorArgs,
      { db }: Context,
      info: GraphQLResolveInfo,
    ): Promise<AuthorInstance | null> {
      const { Author } = db

      const fields = getFieldsFromInfo(info)

      const author = await Author.findOne()
        .select(fields)
        .lean<AuthorInstance>()
        .exec()

      return author
    },
    async authors(
      _: void,
      args: NoArgs,
      { db }: Context,
    ): Promise<AuthorInstance[]> {
      const { Author } = db

      const authors = await Author.find().lean<AuthorInstance>().exec()

      return authors
    },
    async book(
      _: void,
      args: BookArgs,
      { db }: Context,
    ): Promise<BookInstance | null> {
      const { Book } = db

      const book = await Book.findOne().lean<BookInstance>().exec()

      return book
    },
    async books(
      _: void,
      args: NoArgs,
      { db }: Context,
    ): Promise<BookInstance[]> {
      const { Book } = db

      const books = await Book.find().lean<BookInstance>().exec()

      return books
    },
  },
}

export default resolvers
