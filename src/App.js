import React from 'react';
import Header from './components/Header';
import RestRepo from './components/rest/RestRepo';
import GraphQLRepo from './components/graphql/GraphQLRepo';

function App() {
  const owner ='ni3t'
  const repo = 'graphhub'
  const [calls, setCalls] = React.useState({
    rest: { callCount: 0, size: 0, time: 0 },
    gql: { callCount: 0, size: 0, time: 0 }
  });

  return (
    <div className="container pt-4">
      <div className="box">
        <div className="flex flex-row justify-between">
          <Header />
        </div>
      </div>
      <div className="columns">
        <RestRepo
          calls={calls}
          setCalls={setCalls}
          owner={owner}
          repo={repo}
        ></RestRepo>
        <GraphQLRepo
          calls={calls}
          setCalls={setCalls}
          owner={owner}
          repo={repo}
        ></GraphQLRepo>
      </div>
    </div>
  );
}

export default App;
