import { Request } from 'express'
import { AuthorModel } from '@/@types/models/authors'
import { BookModel } from '@/@types/models/books'

type BookInstance = {
  title: string
  author: string
  pages: number
}

type AuthorInstance = {
  name: string
  age: number
}

type Context = {
  db: { Author: AuthorModel; Book: BookModel }
  req: Request
}

type AuthorArgs = {
  id: number
}

type BookArgs = {
  id: number
}

/* eslint-disable @typescript-eslint/no-explicit-any */
type NoArgs = { [key: string]: any }
