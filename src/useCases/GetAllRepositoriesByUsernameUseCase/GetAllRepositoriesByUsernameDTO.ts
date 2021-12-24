import { GithubRepository } from "../../entities/GithubRepository";
import { GithubUser } from "../../entities/GithubUser";

export interface GetAllRepositoriesByUsernameDTO {
  user: GithubUser;
  repositories: GithubRepository[];
}