import { IUserRepoRepository } from "../../repositories/IUserRepoRepository";
import { GetAllRepositoriesByUsernameDTO } from "./GetAllRepositoriesByUsernameDTO";

export class GetAllRepositoriesByUsernameUseCase {
  constructor(
    public userRepoRepository: IUserRepoRepository
  ) {}
  
  async execute(username: string, amount = 50, isAsc = true) {
    const response = await this.userRepoRepository.getAllRepositoriesByUsername(username, amount, isAsc);
    return response;
  }
}