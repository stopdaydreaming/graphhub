import { get, post } from './axiosClient';

const baseUrl = 'https://api.github.com';

export const getRepo = async ({ owner, repo }) => {
  return await get(`${baseUrl}/repos/${owner}/${repo}`);
};

export const getIssues = async ({ owner, repo }) => {
  return await get(`${baseUrl}/repos/${owner}/${repo}/issues`);
};

export const getComments = async ({ owner, repo, issueNumber }) => {
  return await get(
    `${baseUrl}/repos/${owner}/${repo}/issues/${issueNumber}/comments`
  );
};

export const closeIssue = async ({owner, repo, issueNumber }) => {
  return await post(
    `${baseUrl}/repos/${owner}/${repo}/issues/${issueNumber}`,
    { state: "closed" }
  )
}