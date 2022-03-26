import bodyParser from 'body-parser'
import express, { Request, Response } from 'express'

import { PORT, QUEUE_NAME, AMQP_URL } from './config'
import createMQProducer from './producer'

const producer = createMQProducer(AMQP_URL, QUEUE_NAME)

const app = express()
app.use(bodyParser.json())

app.post('/register', async (req: Request, res: Response) => {
  const { email, password } = req.body
  console.log('Registering user...')
  const msg = {
    action: 'REGISTER',
    data: { email, password }
  }

  producer(JSON.stringify(msg))

  return res.send('OK')
})

app.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body
  console.log('Login user...')
  const msg = {
    action: 'LOGIN',
    data: { email, password }
  }
  producer(JSON.stringify(msg))

  return res.send('OK')
})

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
