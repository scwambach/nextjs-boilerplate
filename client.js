import { ApolloClient, InMemoryCache } from '@apollo/client';

export const wpClient = new ApolloClient({
  uri: 'http://wp-boiler.local/graphql/',
  cache: new InMemoryCache(),
});
