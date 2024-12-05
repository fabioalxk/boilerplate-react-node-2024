import { UserRepository } from "../../repositories/userRepository.js";

const userRepository = new UserRepository();

export const getAllUsers = async () => {
  return await userRepository.findAll();
};
