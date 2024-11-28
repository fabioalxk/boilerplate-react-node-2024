import { UserRepository } from "../../repositories/userRepository";

const userRepository = new UserRepository();

export const getUserById = async (id: string) => {
  return await userRepository.findById(id);
};
