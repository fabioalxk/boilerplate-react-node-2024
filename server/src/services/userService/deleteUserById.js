import { UserRepository } from "../../repositories/userRepository";

const userRepository = new UserRepository();

export const deleteUserById = async (id: string) => {
  await userRepository.delete(id);
};
