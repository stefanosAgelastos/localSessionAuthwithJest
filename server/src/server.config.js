/**
 * Holds configuration for 
 * MongoDB connection
 * Session secret for encrypting the cookie
 */
const serverConfig = {
  mongoURL: process.env.MONGODB_URI || "mongodb://localhost:27017/localAuthWithJest",
  port: process.env.PORT || 8000,
  api: {
    prefix: "/api"
  },
  secret: process.env.SESSIONS_SECRET || "secret"
};

export default serverConfig;