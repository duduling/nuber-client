import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ApolloProvider } from 'react-apollo';
import client from './apollo';

const rootNode = document.getElementById('root');

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  rootNode);
