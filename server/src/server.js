import Express from "express";
import mongoose from "mongoose";

// Import required modules
import serverConfig from "./server.config";

// Initialize the Express App
const app = new Express();

// import { getDataBaseURLonLocal } from './util/dbUriHelper';

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, error => {
  if (error) {
    console.error("Please make sure Mongodb is installed and running!");
    throw error;
  }
});

// start app
app.listen(serverConfig.port, error => {
  if (!error) {
    console.log(`App is running on port: ${serverConfig.port}`);
  }
});

export default app;
