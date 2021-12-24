import { GetAllRepositoriesByUsernameDTO } from "../useCases/GetAllRepositoriesByUsernameUseCase/GetAllRepositoriesByUsernameDTO";

export interface IUserRepoRepository {
  getAllRepositoriesByUsername(username: string, amount: number, isAsc: boolean): Promise<GetAllRepositoriesByUsernameDTO>
}