import amqp, { Connection, Channel } from 'amqplib/callback_api'

const sendMessage = (queueChannel: Channel, msg: string, queueName: string) => {
  console.log('Produce message to RabbitMQ...')
  queueChannel.sendToQueue(queueName, Buffer.from(msg))
}

const createMQProducer = (amqpUrl: string, queueName: string) => {
  console.log('Connecting to RabbitMQ...')

  let channel: Channel

  amqp.connect(amqpUrl, (errorConnect: Error, connection: Connection) => {
    if (errorConnect) {
      console.log('Error connecting to RabbitMQ: ', errorConnect)
      return
    }

    connection.createChannel((errorChannel, connectionChannel) => {
      if (errorChannel) {
        console.log('Error creating channel: ', errorChannel)
        return
      }

      channel = connectionChannel
      console.log('Connected to RabbitMQ')
    })
  })

  return (message: string) => sendMessage(channel, message, queueName)
}

export default createMQProducer
