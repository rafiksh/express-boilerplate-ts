import { Request, Response } from "express";

import {
  updateExample as updateExampleService,
  deleteExample as deleteExampleService,
} from "&services/example";

const updateExample = async (req: Request, res: Response) => {
  try {
    const {
      body: updatedBody,
      params: { id },
    } = req;

    console.log("Trying to update example with id: ", id);
    await updateExampleService(id, updatedBody);
    console.log("Successfully updated example with id: ", id);

    res.send("Successfully updated example");
  } catch (error) {
    res.status(500);
    res.send("Error updating example");
  }
};
const deleteExample = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    console.log("Trying to delete example with id: ", id);
    await deleteExampleService(id);
    console.log("Successfully deleted example with id: ", id);

    res.status(200);
    res.send("Successfully deleted example");
  } catch (error) {
    res.status(500);
    res.send("Error deleting example");
  }
};

export { updateExample, deleteExample };
