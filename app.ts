import express from "express";
import "dotenv/config";

import "./src/db";
import { defaultRouter } from "./src/routers/default";
import { healthRoute, exampleRoute } from "./src/routes";

const { PORT = 5000 } = process.env;

const app = express();

app.use("/health", healthRoute(defaultRouter()));
app.use("/examples", exampleRoute(defaultRouter()));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
