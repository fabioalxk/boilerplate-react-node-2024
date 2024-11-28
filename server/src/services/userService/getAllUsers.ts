import { UserRepository } from "../../repositories/userRepository";

const userRepository = new UserRepository();

export const getAllUsers = async () => {
  return await userRepository.findAll();
};
