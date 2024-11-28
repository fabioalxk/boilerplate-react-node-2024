import { Request, Response } from "express";
import { deleteUserById } from "../../services/userService/deleteUserById";

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    await deleteUserById(id);
    res.status(204).json({});
  } catch (error: any) {
    if (error.message === "User not found") {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};
