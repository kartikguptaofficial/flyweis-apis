import ConnectToDatabase from "./utils/database.util";
import app from "./app";

ConnectToDatabase().then(() => {
  app.listen(3000, () => {
    console.log("🚀 Server is running on port 3000");
  })
})