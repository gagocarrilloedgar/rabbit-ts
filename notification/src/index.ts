import bodyParser from 'body-parser'
import express, { Request, Response } from 'express'

import createMQConsumer from './consumer'

import { AMQP_URL, QUEUE_NAME, PORT } from './config'

const app = express()
const consumer = createMQConsumer(AMQP_URL, QUEUE_NAME)

consumer()
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
