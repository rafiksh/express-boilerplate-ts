import { Request, Response } from "express";

import {
  getExamples as getExamplesService,
  getExampleById as getExampleByIdService,
} from "&services/example";

const getExamples = async (req: Request, res: Response) => {
  try {
    console.log("Trying to get all examples");
    const result = await getExamplesService();
    console.log("Successfully got all examples");

    res.status(200);
    res.send(result);
  } catch (error) {
    res.status(500);
    res.send("Error getting examples");
  }
};
const getExampleById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    console.log("Trying to get example with id: ", id);
    const result = await getExampleByIdService(id);
    console.log("Successfully got example with id: ", id);

    res.status(200);
    res.send(result);
  } catch (error) {
    res.status(500);
    res.send("Error getting example");
  }
};

export { getExamples, getExampleById };
