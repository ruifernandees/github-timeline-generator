import { GithubRepository } from '../../entities/GithubRepository';
import { GithubUser } from '../../entities/GithubUser';
import { graphqlApi } from '../../services/graphqlApi';
import { GetAllRepositoriesByUsernameDTO } from '../../useCases/GetAllRepositoriesByUsernameUseCase/GetAllRepositoriesByUsernameDTO';
import { IUserRepoRepository } from '../IUserRepoRepository';

export class GraphQLUserRepoRepository implements IUserRepoRepository {
  async getAllRepositoriesByUsername(username: string): Promise<GetAllRepositoriesByUsernameDTO> {
    try {
      type tResponse = {
        user: {
          name: string,
          avatarUrl: string,
          repositories: {
            nodes: GithubRepository[]
          }
        }
      };
      const response = await graphqlApi(`
        {
          user(login: "${username}") {
            avatarUrl
            name
            repositories(first: 50, orderBy: {field: CREATED_AT, direction: ASC}, isFork: false) {
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
        user: new GithubUser(user.name, user.avatarUrl),
        repositories: user.repositories.nodes
      }
    } catch (error) {
      throw new Error("Error");
    } 
    
  } 
}