import mongoose from "mongoose";
import { DATABASE_CONFIGS } from "../configs/app.config.js";

const connection = {};

const ConnectToDatabase = async () => {
  // console.log("Connecting to MongoDb")
  const databaseConnectionUrl = DATABASE_CONFIGS.CONNECT_URI;
  if (connection.isConnected) {
    return connection;
  }

  if (!databaseConnectionUrl) {
    console.log("Error: Invalid/Missing environment variable MONGODB_URI");
    return;
  }

  try {
    const db = await mongoose.connect(databaseConnectionUrl);
    // console.log(db)
    connection.isConnected = db.connections[0].readyState;

    if (connection.isConnected === 1) {
      console.log("🚀 Successfully connected to database");
    } else {
      console.log("🔴 Failed to connect to database");
    }
  } catch (error) {
    console.log("🔴 Failed to connect to MongoDB:", error.message);
  }
  return connection;
};

export default ConnectToDatabase;
