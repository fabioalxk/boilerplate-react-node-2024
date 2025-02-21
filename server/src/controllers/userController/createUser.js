import { createNewUser } from "../../services/userService/createNewUser";

export const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await createNewUser(name, email);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
