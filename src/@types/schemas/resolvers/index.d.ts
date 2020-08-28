import { Request } from 'express'

export = Resolvers

export as namespace Resolvers

declare namespace Resolvers {
  export as namespace Book

  interface Book {
    title: string
    author: string
    pages: number
  }

  interface Author {
    name: string
    age: number
  }

  interface Context {
    db: null
    req: Request
  }

  interface AuthorArgs {
    id: number
  }

  interface BookArgs {
    id: number
  }
}
