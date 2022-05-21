import { Request, Response } from "express";

import { addExample as addExampleService } from "../../services/example/add";

const addExample = (req: Request, res: Response) => {
  try {
    const { name, age } = req.body;

    addExampleService({ name, age });

    res.status(204);
    res.send("Successfully added example");
  } catch (error) {
    res.status(500);
    res.send("Error adding example");
  }
};

export { addExample };
