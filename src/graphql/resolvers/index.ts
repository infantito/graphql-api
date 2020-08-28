import { IResolvers } from 'apollo-server-express'

const resolvers: IResolvers<void, Resolvers.Context> = {
  Query: {
    author(_: void, args: Resolvers.AuthorArgs): Resolvers.Author {
      const { id } = args

      return {
        name: 'Allan Poe',
        age: 45 + id,
      }
    },
    authors(): Resolvers.Author[] {
      return [
        {
          name: 'Allan Poe',
          age: 45,
        },
      ]
    },
    book(_: void, args: Resolvers.BookArgs): Resolvers.Book {
      const { id } = args

      return {
        title: 'book name',
        author: 'author name',
        pages: id,
      }
    },
    books(): Resolvers.Book[] {
      return [
        {
          title: 'book name 1',
          author: 'author name 1',
          pages: 1,
        },
        {
          title: 'book name 2',
          author: 'author name 2',
          pages: 2,
        },
        {
          title: 'book name 3',
          author: 'author name 3',
          pages: 3,
        },
      ]
    },
  },
}

export default resolvers
