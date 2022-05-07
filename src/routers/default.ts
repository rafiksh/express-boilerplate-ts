import express, { Router } from "express";
import bodyParser from "body-parser";
import cors from "cors";

const defaultRouter = (): Router => {
  const router = express.Router();
  router.use(cors());
  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({ extended: true }));
  router.use(express.static("public"));

  return router;
};
export { defaultRouter };
