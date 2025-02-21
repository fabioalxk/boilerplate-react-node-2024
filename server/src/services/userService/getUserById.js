import { UserRepository } from "../../repositories/userRepository.js";

const userRepository = new UserRepository();

export const getUserById = async (id) => {
  return await userRepository.findById(id);
};
