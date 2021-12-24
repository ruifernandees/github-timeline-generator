import { GithubRepository } from '../../entities/GithubRepository';
import { GithubUser } from '../../entities/GithubUser';
import { graphqlApi } from '../../services/graphqlApi';
import { GetRepositoriesByUsernameDTO } from '../../useCases/GetRepositoriesByUsernameUseCase/GetRepositoriesByUsernameDTO';
import { IUserRepoRepository } from '../IUserRepoRepository';

export class GraphQLUserRepoRepository implements IUserRepoRepository {
  async getRepositoriesByUsername(username: string, amount: number, isAsc: boolean): Promise<GetRepositoriesByUsernameDTO> {
    try {
      type tResponse = {
        user: {
          name: string,
          avatarUrl: string,
          login: string,
          repositories: {
            nodes: GithubRepository[]
          }
        }
      };
      const maxRepositories = 50;
      if (amount > maxRepositories) throw new Error(`Cannot support more than ${maxRepositories} repositories`);
      const response = await graphqlApi(`
        {
          user(login: "${username}") {
            avatarUrl
            name
            login
            repositories(first: ${amount}, orderBy: {field: CREATED_AT, direction: ${isAsc ? 'ASC' : 'DESC'}}, isFork: false) {
              nodes {
                name
                url
                createdAt
                description
              }
            }
          }
        }
      `);
      const { user } = response as tResponse;
      return {
        user: new GithubUser(user.name, user.avatarUrl, user.login),
        repositories: user.repositories.nodes
      }
    } catch (error) {
      const errorObject = JSON.parse(JSON.stringify(error));
      if (errorObject.errors.length > 0) {
        throw new Error(errorObject.errors[0].message);
      }
      throw new Error("Unexpected error!");
    } 
    
  } 
}