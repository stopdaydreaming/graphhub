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
      issues(filterBy: { states: [OPEN] }, first: 100) {
        totalCount
        nodes {
          id
          title
          number
          author {
            login
            avatarUrl
          }
          createdAt
          body
          comments(first: 100) {
            nodes {
              id
              body
              author {
                avatarUrl
              }
              createdAt
            }
          }
        }
      }
    }
  }
`;
