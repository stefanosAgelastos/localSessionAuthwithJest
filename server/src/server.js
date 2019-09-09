import Express from "express";
import mongoose from "mongoose";
import appLoader from "./server.loader";

// Import required modules
import serverConfig from "./server.config";

// Initialize the Express App
const app = new Express();

// Load express middleware
appLoader(app);
// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, { useNewUrlParser: true, useCreateIndex: true }, error => {
  if (error) {
    console.error("Please make sure Mongodb is installed and running!");
    throw error;
  }
  console.log("connected db");
});

// start app
app.listen(serverConfig.port, error => {
  if (!error) {
    console.log(`App is running on port: ${serverConfig.port}`);
  }
});

export default app;
