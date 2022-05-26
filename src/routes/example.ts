import { Router } from "express";
import { validate } from "express-validation";

import {
  getExampleSchema,
  addExampleSchema,
  deleteExampleSchema,
  updateExampleSchema,
} from "&validation/schema/example";
import {
  addExample,
  getExamples,
  getExampleById,
  updateExample,
  deleteExample,
} from "&controllers/example";

const exampleRoute = (router: Router) => {
  router.get("/", getExamples);
  router.get("/:id", validate(getExampleSchema), getExampleById);

  router.post("/", validate(addExampleSchema), addExample);

  router.put("/:id", validate(updateExampleSchema), updateExample);

  router.delete("/:id", validate(deleteExampleSchema), deleteExample);

  return router;
};

export { exampleRoute };
