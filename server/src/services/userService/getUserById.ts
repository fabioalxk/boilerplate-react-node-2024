import { UserRepository } from "../../repositories/userRepository.js";

const userRepository = new UserRepository();

export const getUserById = async (id: string) => {
  return await userRepository.findById(id);
};
