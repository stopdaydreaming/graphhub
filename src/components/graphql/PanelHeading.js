import React from 'react';

export default ({ issues }) => (
  <React.Fragment>
    <p className="panel-heading">Issues</p>
    <p className="panel-tabs">
      {`${issues && issues.totalCount} ${
        issues && issues.totalCount === 1 ? 'Open Issue' : 'Open Issues'
      }`}
    </p>
  </React.Fragment>
);
