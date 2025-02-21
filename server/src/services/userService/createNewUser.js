import { UserRepository } from "../../repositories/userRepository";

const userRepository = new UserRepository();

export const createNewUser = async (name, email) => {
  return await userRepository.create({ name, email });
};
