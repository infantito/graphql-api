import { IResolvers } from 'apollo-server-express'
import {
  AuthorArgs,
  BookArgs,
  Context,
  AuthorInstance,
  BookInstance,
} from '@/@types/schemas/resolvers'

const resolvers: IResolvers<void, Context> = {
  Query: {
    async author(
      _: void,
      args: AuthorArgs,
      { db }: Context,
    ): Promise<AuthorInstance | null> {
      const { Author } = db

      const author = await Author.findOne({ name: 'Daniel' })
        .lean<AuthorInstance>()
        .exec()

      return author
    },
    async authors(
      _: void,
      args: void,
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
    async books(_: void, args: void, { db }: Context): Promise<BookInstance[]> {
      const { Book } = db

      const books = await Book.find().lean<BookInstance>().exec()

      return books
    },
  },
}

export default resolvers
