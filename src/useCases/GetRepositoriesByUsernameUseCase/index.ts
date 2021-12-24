import { GraphQLUserRepoRepository } from '../../repositories/implementations/GraphQLUserRepoRepository';
import { GetRepositoriesByUsernameUseCase } from './GetRepositoriesByUsernameUseCase';

export const getRepositoriesByUsernameUseCase = new GetRepositoriesByUsernameUseCase(
  new GraphQLUserRepoRepository() 
);