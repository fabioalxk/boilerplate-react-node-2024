import User from "../models/User";

export class UserRepository {
  async findAll() {
    return await User.findAll();
  }

  async findById(id: string) {
    return await User.findByPk(id);
  }

  async create(userData: { name: string; email: string }) {
    return await User.create(userData);
  }

  async delete(id: string) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("User not found");
    }
    await user.destroy();
  }
}
