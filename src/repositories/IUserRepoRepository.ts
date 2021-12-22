import { GetAllRepositoriesByUsernameDTO } from "../useCases/GetAllRepositoriesByUsernameUseCase/GetAllRepositoriesByUsernameDTO";

export interface IUserRepoRepository {
  getAllRepositoriesByUsername(username: string): Promise<GetAllRepositoriesByUsernameDTO>
}