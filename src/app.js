import express from "express";
import cors from "cors";
import AppRoutes from "./routes/index.route.js";

const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, true);
    },
    credentials: true,
  }),
);

app.use(
  express.urlencoded({
    limit: "80mb",
    extended: false,
  }),
);

app.use(
  express.json({
    limit: "100mb",
  }),
);

app.use("/v1", AppRoutes);

export default app;
