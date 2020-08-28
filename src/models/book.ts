import mongoose from 'mongoose'
import { BookDocument, BookModel, BookAttributes } from '@/@types/models/books'

const Schema = mongoose.Schema

const schema = new Schema<BookAttributes>(
  {
    title: {
      type: String,
    },
    author: {
      type: String,
    },
    pages: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
)

const book = mongoose.model<BookDocument, BookModel>('Book', schema)

export default book
