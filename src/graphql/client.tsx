import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/swapi',
  cache: new InMemoryCache(),
});

export default client;
