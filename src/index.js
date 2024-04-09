import ConnectToDatabase from "./utils/database.util.js";
import app from "./app.js";

ConnectToDatabase().then(() => {
  app.listen(3000, () => {
    console.log("🚀 Server is running on port 3000");
  });
});
