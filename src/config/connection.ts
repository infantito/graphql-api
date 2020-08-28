import mongoose from 'mongoose'
import { mongo as config } from 'constants/env'

const password = config.username ? `${config.username}:${config.password}@` : ''

mongoose.connect(
  `mongodb://${password}${config.host}:${config.port}/${config.database}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
)
