import { InMemoryCache } from 'apollo-boost';
import ApolloClient from 'apollo-boost';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: 'https://fujix-milkster-api-mocked.herokuapp.com/graphql',
  request: operation => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
});

export default client;
