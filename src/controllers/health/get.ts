import { Request, Response } from "express";

const getHealth = async (req: Request, res: Response) => {
  try {
    res.status(200);
    res.send("Health OK");
  } catch (error) {
    res.status(500);
    res.send("Health KO");
  }
};

export { getHealth };
