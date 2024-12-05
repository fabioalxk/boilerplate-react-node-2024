import { Request, Response } from "express";
import { createNewUser } from "../../services/userService/createNewUser.js";

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, email } = req.body;
  try {
    const newUser = await createNewUser(name, email);
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
