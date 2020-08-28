import { IResolvers } from 'apollo-server-express'

const resolvers: IResolvers<Source, Context> = {
  Query: {
    author(): Author {
      return {
        name: 'Allan Poe',
        age: 45,
      }
    },
    authors(): Author[] {
      return [
        {
          name: 'Allan Poe',
          age: 45,
        },
      ]
    },
    book(): Book {
      return {
        title: 'book name',
        author: 'author name',
      }
    },
    books(): Book[] {
      return [
        {
          title: 'book name 1',
          author: 'author name 1',
        },
        {
          title: 'book name 2',
          author: 'author name 2',
        },
        {
          title: 'book name 3',
          author: 'author name 3',
        },
      ]
    },
  },
}

export default resolvers
