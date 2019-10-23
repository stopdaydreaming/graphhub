import gql from 'graphql-tag';

export const CLOSE_ISSUE = gql`
  mutation CloseIssue($input: CloseIssueInput!) {
    closeIssue(input: $input) {
      issue {
        id
      }
    }
  }
`;
