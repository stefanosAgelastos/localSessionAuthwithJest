import mongoose from 'mongoose';
import serverConfig from '../server.config';

export default async () => {
  const connection = await mongoose.connect(serverConfig.databaseURL, { useNewUrlParser: true, useCreateIndex: true });
  return connection.connection.db;
};