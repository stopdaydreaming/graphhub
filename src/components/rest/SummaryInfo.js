import React from 'react';

export default ({ repository }) => {
  const {
    stargazers_count,
    open_issues_count,
    owner: { login },
    name
  } = repository;
  return (
    <div className="flex flex-row justify-between items-end">
      <div>
        <h1 className="title">{name || '...'}</h1>
        <h2 className="subtitle">{login || '...'}</h2>
      </div>
      <div className="flex flex-col w-24">
        <div className="flex flex-row justify-between">
          <p>Stars</p>
          <p>{stargazers_count}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Issues</p>
          <p>{open_issues_count}</p>
        </div>
      </div>
    </div>
  );
};
