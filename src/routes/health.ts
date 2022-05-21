import { Router } from "express";

import { getHealth } from "&controllers/health";

const healthRoute = (router: Router) => {
  router.get("/", getHealth);

  return router;
};

export { healthRoute };
