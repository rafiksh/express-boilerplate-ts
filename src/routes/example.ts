import { Router } from "express";

import { addExample, getExamples, getExampleById } from "&controllers/example";

const exampleRoute = (router: Router) => {
  router.get("/", getExamples);
  router.get("/:id", getExampleById);

  router.post("/", addExample);

  return router;
};

export { exampleRoute };
