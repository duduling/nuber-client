import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import client from './apollo';
import App from './Components/App';

import GlobalStyle from './style/global-styles';

const rootNode = document.getElementById('root');

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  rootNode);
