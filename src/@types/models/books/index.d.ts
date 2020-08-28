import { Document, Model } from 'mongoose'

type BookAttributes = {
  title: string
  author: string
  pages: number
}

type BookDocument = Document & BookAttributes

type BookModel = Model<BookDocument>
