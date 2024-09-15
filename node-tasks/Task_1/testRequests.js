const axios = require('axios');

console.log("Starting to send requests..."); // Add this line for debugging

(async function sendRequests() {
  for (let i = 0; i < 110; i++) {
    try {
      const response = await axios.get('http://localhost:3003/');
      console.log(`Request ${i + 1}: ${response.data}`);
    } catch (error) {
      console.error(`Request ${i + 1}: ${error.response.status} - ${error.response.data.message}`);
      break;
    }
  }
})();
