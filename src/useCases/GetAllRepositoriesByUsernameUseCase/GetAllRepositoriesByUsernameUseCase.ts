import { IUserRepoRepository } from "../../repositories/IUserRepoRepository";
import { GetAllRepositoriesByUsernameDTO } from "./GetAllRepositoriesByUsernameDTO";

export class GetAllRepositoriesByUsernameUseCase {
  constructor(
    public userRepoRepository: IUserRepoRepository
  ) {}
  
  async execute(username: string) {
    const response = await this.userRepoRepository.getAllRepositoriesByUsername(username);
    return response;
  }
}