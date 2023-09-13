import {View, Text} from 'react-native';
import React from 'react';
import AppNavigator from './src/Navigation/StackNavigation';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import HomeScreen from './src/Screen/HomeScreen';
import SubmitComponent from './src/Component/SubmitComponent/SubmitComponent';

const client = new ApolloClient({
  uri: 'https://profound-marmot-29.hasura.app/v1/graphql',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppNavigator />
    </ApolloProvider>
  );
};
export default App;
