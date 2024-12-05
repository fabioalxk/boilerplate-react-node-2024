import { UserRepository } from "../../repositories/userRepository.js";

const userRepository = new UserRepository();

export const createNewUser = async (name: string, email: string) => {
  return await userRepository.create({ name, email });
};
