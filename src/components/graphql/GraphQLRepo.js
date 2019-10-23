import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import NetworkTab from '../shared/NetworkTab';
import SummaryInfo from './SummaryInfo';
import PanelHeading from './PanelHeading';
import { IssueBody } from './IssueBody';

import { REPOSITORY } from './queries/Repository';

export const GraphQLRepo = ({ owner, repo, calls }) => {
  const { data } = useQuery(REPOSITORY, { variables: { owner, name: repo } });

  const responseSize = data && JSON.stringify(data).length;

  const newCalls = {
    ...calls,
    gql: {
      callCount: calls.gql.callCount + 1,
      size: calls.gql.size + responseSize
    }
  };

  return (
    <div className="column">
      <div className="box">
        <p className="has-text-success">GRAPHQL (STATIC NOW)</p>
        <NetworkTab type="gql" calls={newCalls}></NetworkTab>
        <hr />
        {data && <SummaryInfo repository={data.repository} />}
        <hr />
        <nav className="panel">
          <PanelHeading issues={data && data.repository.issues}></PanelHeading>
          {data &&
            data.repository.issues.nodes.map((issue, index) => (
              <IssueBody index={index} issue={issue}></IssueBody>
            ))}
        </nav>
      </div>
    </div>
  );
};

export default GraphQLRepo;
