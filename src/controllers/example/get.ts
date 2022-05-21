import { Request, Response } from "express";

import {
  getExamples as getExamplesService,
  getExampleById as getExampleByIdService,
} from "../../services/example";

const getExamples = async (req: Request, res: Response) => {
  try {
    const result = await getExamplesService();

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

    const result = await getExampleByIdService(id);

    res.status(200);
    res.send(result);
  } catch (error) {
    res.status(500);
    res.send("Error getting example");
  }
};

export { getExamples, getExampleById };
