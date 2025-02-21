import User from '../models/User.js';

export class UserRepository {
  async findById(id) {
    return await User.findByPk(id);
  }

  async findByEmailAddress(email) {
    return await User.findOne({ where: { email } });
  }

  async findAll() {
    return await User.findAll();
  }

  async create(userData) {
    return await User.create(userData);
  }

  async delete(id) {
    return await User.destroy({ where: { id } });
  }
}

export default new UserRepository();