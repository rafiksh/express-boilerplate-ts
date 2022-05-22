import { Router } from "express";

import {
  addExample,
  getExamples,
  getExampleById,
  updateExample,
  deleteExample,
} from "&controllers/example";

const exampleRoute = (router: Router) => {
  router.get("/", getExamples);
  router.get("/:id", getExampleById);

  router.post("/", addExample);

  router.put("/:id", updateExample);

  router.delete("/:id", deleteExample);

  return router;
};

export { exampleRoute };
