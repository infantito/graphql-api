import { Request } from 'express'
import { AuthorModel } from '@/@types/models/authors'
import { BookModel } from '@/@types/models/books'

export type BookInstance = {
  title: string
  author: string
  pages: number
}

export = BookInstance

export type AuthorInstance = {
  name: string
  age: number
}

export = AuthorInstance

export type Context = {
  db: { Author: AuthorModel; Book: BookModel }
  req: Request
}

export = Context

export type AuthorArgs = {
  id: number
}

export = AuthorArgs

export type BookArgs = {
  id: number
}

export = BookArgs
