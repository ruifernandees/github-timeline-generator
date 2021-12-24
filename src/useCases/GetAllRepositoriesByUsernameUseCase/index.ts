import { GraphQLUserRepoRepository } from '../../repositories/implementations/GraphQLUserRepoRepository';
import { GetAllRepositoriesByUsernameUseCase } from './GetAllRepositoriesByUsernameUseCase';

export const getAllRepositoriesByUsernameUseCase = new GetAllRepositoriesByUsernameUseCase(
  new GraphQLUserRepoRepository() 
);