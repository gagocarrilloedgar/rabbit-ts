import 'dotenv-safe'

const PORT = parseInt(String(process.env.PORT), 10) || 3000
const AMQP_URL = String(process.env.AMQP_URL)
const QUEUE_NAME = String(process.env.QUEUE_NAME)

export { PORT, AMQP_URL, QUEUE_NAME }
