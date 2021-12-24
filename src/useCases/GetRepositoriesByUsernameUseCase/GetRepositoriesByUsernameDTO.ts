import { GithubRepository } from "../../entities/GithubRepository";
import { GithubUser } from "../../entities/GithubUser";

export interface GetRepositoriesByUsernameDTO {
  user: GithubUser;
  repositories: GithubRepository[];
}