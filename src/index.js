const ConnectToDatabase = require("./utils/database.util.js");
const app = require("./app.js");

ConnectToDatabase().then(() => {
  app.listen(3000, () => {
    console.log("🚀 Server is running on port 3000");
  });
});
