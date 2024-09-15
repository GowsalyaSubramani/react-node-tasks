// rateLimitMiddleware.js (Extended with roles)
const rateLimit = (options) => {
    const requests = {};
  
    return (req, res, next) => {
      const userIdentifier = req.ip; // Use API key if available
      const currentTime = Date.now();
      
      // Assume user role is determined (req.user.role)
      const userRole = req.user?.role || 'regular'; 
      const roleOptions = options[userRole] || { windowMs: 15 * 60 * 1000, max: 100 };
  
      if (!requests[userIdentifier]) {
        requests[userIdentifier] = [];
      }
  
      requests[userIdentifier] = requests[userIdentifier].filter(
        (timestamp) => currentTime - timestamp < roleOptions.windowMs
      );
  
      if (requests[userIdentifier].length >= roleOptions.max) {
        return res.status(429).json({ message: 'Too many requests. Try again later.' });
      }
  
      requests[userIdentifier].push(currentTime);
      next();
    };
  };
  
  module.exports = rateLimit;
  