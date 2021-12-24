import { GithubRepository } from "./GithubRepository";
import { GithubUser } from "./GithubUser";

export class GithubData {
  constructor(
    public user: GithubUser,
    public repositories: GithubRepository[]    
  ) {}
}