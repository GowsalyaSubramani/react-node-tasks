const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Chat room data
const rooms = {};

// WebSocket connection
wss.on('connection', (ws) => {
  let currentRoom = null;
  let username = null;

  ws.on('message', (message) => {
    const data = JSON.parse(message);

    switch (data.type) {
      case 'join':
        currentRoom = data.room;
        username = data.username;
        if (!rooms[currentRoom]) {
          rooms[currentRoom] = [];
        }
        rooms[currentRoom].push(ws);
        broadcast(currentRoom, { type: 'user-joined', username });
        break;
      case 'message':
        broadcast(currentRoom, { type: 'message', username, text: data.text });
        logMessage(username, currentRoom, data.text);
        break;
      case 'leave':
        if (currentRoom && rooms[currentRoom]) {
          rooms[currentRoom] = rooms[currentRoom].filter((client) => client !== ws);
          if (rooms[currentRoom].length === 0) {
            delete rooms[currentRoom];
          }
          broadcast(currentRoom, { type: 'user-left', username });
        }
        break;
    }
  });

  ws.on('close', () => {
    if (currentRoom && rooms[currentRoom]) {
      rooms[currentRoom] = rooms[currentRoom].filter((client) => client !== ws);
      if (rooms[currentRoom].length === 0) {
        delete rooms[currentRoom];
      }
      broadcast(currentRoom, { type: 'user-left', username });
    }
  });
});

function broadcast(room, message) {
  if (rooms[room]) {
    rooms[room].forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
      }
    });
  }
}

function logMessage(username, room, message) {
  const logEntry = `${new Date().toISOString()} - ${room} - ${username}: ${message}\n`;
  fs.appendFile('chat.log', logEntry, (err) => {
    if (err) console.error('Failed to log message:', err);
  });
}

// Start server
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
