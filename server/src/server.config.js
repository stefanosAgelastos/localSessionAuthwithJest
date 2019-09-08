const serverConfig = {
  mongoURL: process.env.MONGODB_URI || "mongodb://localhost:27017/gps-app",
  port: process.env.PORT || 8000,
  api: {
    prefix: "/api"
  },
  jwtSecret: process.env.JWT_SECRET || "secret"
};

export default serverConfig;