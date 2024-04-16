require("dotenv").config();

const DATABASE_CONFIGS = {
  CONNECT_URI:
    process.env.DATABASE_URL ||
    "mongodb+srv://kartikgupta962004:kartik96@discord-bot-cluster.cm6ulb5.mongodb.net/flyweis-asses-apis",
};

module.exports = { DATABASE_CONFIGS };