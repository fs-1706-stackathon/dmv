import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: '/graphql',
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
