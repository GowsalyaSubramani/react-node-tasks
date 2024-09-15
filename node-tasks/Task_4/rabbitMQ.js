// rabbitMQ.js
const amqp = require('amqplib');

let channel, connection;

async function connectRabbitMQ() {
    try {
        connection = await amqp.connect('amqp://localhost');
        channel = await connection.createChannel();
        console.log('Connected to RabbitMQ');
    } catch (error) {
        console.error('Error connecting to RabbitMQ', error);
        process.exit(1);
    }
}

async function publishToQueue(queue, message) {
    let retries = 3;
    while (retries > 0) {
        try {
            await channel.assertQueue(queue);
            channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
            console.log(`Message sent to ${queue}:`, message);
            break;
        } catch (error) {
            console.error('Error publishing to queue', error);
            retries -= 1;
            if (retries === 0) {
                console.error(`Failed to send message after 3 retries:`, message);
            } else {
                console.log(`Retrying... Attempts left: ${retries}`);
            }
        }
    }
}


module.exports = { connectRabbitMQ, publishToQueue };
