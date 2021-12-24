import { graphql } from "@octokit/graphql";

export const graphqlApi = graphql.defaults({
  headers: {
    authorization: `token ${process.env.REACT_APP_API_KEY}`
  }
});