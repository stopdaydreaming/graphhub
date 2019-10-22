import React from 'react';

export default ({ issues }) => (
  <React.Fragment>
    <p className="panel-heading">Issues</p>
    <p className="panel-tabs">
      {`${issues && issues.length} ${
        issues && issues.length === 1 ? 'Open Issue' : 'Open Issues'
      }`}
    </p>
  </React.Fragment>
);
