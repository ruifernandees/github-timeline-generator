import { GetRepositoriesByUsernameDTO } from "../useCases/GetRepositoriesByUsernameUseCase/GetRepositoriesByUsernameDTO";

export interface IUserRepoRepository {
  getRepositoriesByUsername(username: string, amount: number, isAsc: boolean): Promise<GetRepositoriesByUsernameDTO>
}