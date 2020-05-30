import React from 'react';
import { Box } from '@chakra-ui/core';
import Cart from '../components/Cart';

import { RouteComponentProps } from '@reach/router';

const HomePage: React.FC<RouteComponentProps> = () => {
  return (
    <Box mx="auto">
      <Cart />
    </Box>
  );
};

export default HomePage;
