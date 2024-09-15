// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { connectRabbitMQ, publishToQueue } = require('./rabbitMQ');

const app = express();
app.use(bodyParser.json());

let orders = [];

// Create an order
app.post('/orders', async (req, res) => {
    const order = { id: orders.length + 1, ...req.body, status: 'created' };
    orders.push(order);

    // Notify inventory and payment services
    await publishToQueue('orderCreated', order);
    res.status(201).json(order);
});

// Update an order
app.put('/orders/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const order = orders.find(o => o.id === id);

    if (!order) return res.status(404).json({ error: 'Order not found' });

    order.status = req.body.status || order.status;

    // Notify services about the update
    await publishToQueue('orderUpdated', order);
    res.json(order);
});

// Get all orders
app.get('/orders', (req, res) => {
    res.json(orders);
});

// RabbitMQ connection
connectRabbitMQ();

const PORT = 3000;
app.listen(PORT, () => console.log(`Orders service running on port ${PORT}`));
