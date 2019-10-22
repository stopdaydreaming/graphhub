import React from 'react';
import { DateTime } from 'luxon';

export const IssueBody = ({ closeIssue, index, issue, comments }) => {
  const issueComments =
    comments.length > 0 &&
    comments.find(c => c.issueNumber === issue.number).commentSet;

  return (
    <div className="panel-block">
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between">
          <p className="font-bold mb-2">{issue.title}</p>
          <button className="button" onClick={() => closeIssue(issue.number, index)}>Close</button>
        </div>
        <div className="flex flex-row justify-between mb-2">
          <span class="is-size-7 flex flex-row items-end">
            <img
              src="https://avatars2.githubusercontent.com/u/4932641?s=88&v=4"
              className="h-8 mr-2"
              alt="GitHub Avatar"
            />
            {issue.user.login}
          </span>
          <span class="is-size-7 self-end">
            {DateTime.fromISO(issue.created_at).toLocaleString(
              DateTime.DATETIME_MED
            )}
          </span>
        </div>
        <div className="border-gray-200 border-2 p-2 is-size-6 w-full">
          {issue.body.slice(0, 200)}
        </div>
        {issueComments &&
          issueComments.map(comment => (
            <div className="flex flex-col bg-gray-200 mb-1">
              <div className="flex flex-row px-2 pt-2">
                <div className="flex-grow">{comment.body}</div>
                <img alt="avatar" src={`${comment.user.avatar_url}`} className="h-6" />
              </div>
              <div className="p-2 w-full flex flex-row justify-end">
                <span className="is-size-7">
                  {DateTime.fromISO(comment.created_at).toLocaleString(
                    DateTime.DATETIME_MED
                  )}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
