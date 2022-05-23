import { Request, Response } from "express";

import { addExample as addExampleService } from "&services/example";

const addExample = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    console.log("Trying to add example");
    await addExampleService(body);
    console.log("Successfully added example");

    res.status(200);
    res.send("Successfully added example");
  } catch (error) {
    res.status(500);
    res.send("Error adding example");
  }
};

export { addExample };
