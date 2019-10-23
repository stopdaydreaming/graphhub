import React from 'react';
import NetworkTab from '../shared/NetworkTab';
import SummaryInfo from './SummaryInfo';
import PanelHeading from './PanelHeading';
import { IssueBody } from './IssueBody';

import { apolloClient, test } from '../../services/apolloClient';

test();

export const GraphQLRepo = ({ owner, repo, calls, setCalls }) => {
  const repository = {
    owner: {
      login: 'ni3t'
    }
  };
  const issues = [];
  const comments = [];

  return (
    <div className="column">
      <div className="box">
        <p className="has-text-success">GRAPHQL (STATIC NOW)</p>
        <NetworkTab type="gql" calls={calls}></NetworkTab>
        <hr />
        <SummaryInfo repository={repository} />
        <hr />
        <nav className="panel">
          <PanelHeading issues={issues}></PanelHeading>
          {issues.map((issue, index) => (
            <IssueBody
              index={index}
              issue={issue}
              comments={comments}
            ></IssueBody>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default GraphQLRepo;
