import { IUserRepoRepository } from "../../repositories/IUserRepoRepository";
import { GetRepositoriesByUsernameDTO } from "./GetRepositoriesByUsernameDTO";

export class GetRepositoriesByUsernameUseCase {
  constructor(
    public userRepoRepository: IUserRepoRepository
  ) {}
  
  async execute(username: string, amount = 50, isAsc = true) {
    const response = await this.userRepoRepository.getRepositoriesByUsername(username, amount, isAsc);
    return response;
  }
}