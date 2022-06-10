import express from "express";
import "dotenv/config";
import "module-alias/register";

import "&db/.";
import { defaultRouter } from "&routers/default";
import { healthRoute, exampleRoute } from "&routes/.";

const { PORT = 5000 } = process.env;

const app = express();

app.use("/health", healthRoute(defaultRouter()));
app.use("/examples", exampleRoute(defaultRouter()));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
