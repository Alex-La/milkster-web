import React from 'react';
import './App.scss';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';

import { ApolloProvider } from '@apollo/react-hooks';

import client from './startup/apollo/index';

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </Router>
  );
}

export default App;
