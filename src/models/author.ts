import mongoose from 'mongoose'
import {
  AuthorDocument,
  AuthorModel,
  AuthorAttributes,
} from '@/@types/models/authors'

const Schema = mongoose.Schema

const AuthorSchema = new Schema<AuthorAttributes>(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
)

const author = mongoose.model<AuthorDocument, AuthorModel>(
  'Author',
  AuthorSchema,
)

export default author
