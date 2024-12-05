import { Request, Response } from "express";
import { getAllUsers } from "../../services/userService/getAllUsers.js";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
