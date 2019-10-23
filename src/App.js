import React from 'react';
import Header from './components/Header';
import RestRepo from './components/rest/RestRepo';
import GraphQLRepo from './components/graphql/GraphQLRepo';
import { ApolloProvider } from '@apollo/react-hooks';
import { apolloClient } from './services/apolloClient';

function App() {
  const owner = 'ni3t';
  const repo = 'graphhub';
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
        <ApolloProvider client={apolloClient}>
          <GraphQLRepo calls={calls} owner={owner} repo={repo}></GraphQLRepo>
        </ApolloProvider>
      </div>
    </div>
  );
}

export default App;
