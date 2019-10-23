import gql from 'graphql-tag';

export const REPOSITORY = gql`
  query Repository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      owner {
        login
      }
      stargazers {
        totalCount
      }
      issues(filterBy: { states: [OPEN] }) {
        totalCount
      }
    }
  }
`;
