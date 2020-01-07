import { UserRepository } from "../repositories";
import { User } from "../entities/User";

export class UserService {
  constructor(private userRepository: UserRepository) { }

  findById = async (id: string) => {
    return await this.userRepository.findById(id);
  }

  register = async (user: User) => {
    return await this.userRepository.register(user);
  }
}
