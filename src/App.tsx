import React from 'react';
import { Provider, rootStore } from './models/Root';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';

import Home from './pages/Home';
import Counter from './pages/Counter';

import { Router } from '@reach/router';

export const globalStyles = css`
  body {
    background-color: #21252f;
    color: #d9e1e9;
  }
`;

const App = () => {
  return (
    <Provider value={rootStore}>
      <ThemeProvider>
        <Global styles={globalStyles} />
        <CSSReset />
        <Router>
          <Home path="/" />
          <Counter path="/counter" />
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
