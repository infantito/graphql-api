import dotenv from 'dotenv'

dotenv.config()

export const isDevelopment = process.env.NODE_ENV === 'development'

export const PORT = process.env.PORT || 3000

export const mongo: MongoConfig = {
  host: process.env.MONGO_URL || 'localhost',
  port: Number.parseInt(process.env.MONGO_PORT as string, 10) || 27017,
  username: process.env.MONGO_USER,
  password: process.env.MONGO_PASS,
  database: process.env.MONGO_DB as string,
}
