import { UserRepository } from "../../repositories/userRepository";

const userRepository = new UserRepository();

export const deleteUserById = async (id) => {
  await userRepository.delete(id);
};
