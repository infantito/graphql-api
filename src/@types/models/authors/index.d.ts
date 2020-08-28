import { Document, Model } from 'mongoose'

type AuthorAttributes = {
  name: string
  age: number
}

type AuthorDocument = Document & AuthorAttributes

type AuthorModel = Model<AuthorDocument>
