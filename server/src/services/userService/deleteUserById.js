import { UserRepository } from "../../repositories/userRepository.js";

const userRepository = new UserRepository();

export const deleteUserById = async (id) => {
  await userRepository.delete(id);
};
