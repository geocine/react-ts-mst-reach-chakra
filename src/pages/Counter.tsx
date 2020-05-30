import React from 'react';
import { Box } from '@chakra-ui/core';
import Counter from '../components/Counter';

import { RouteComponentProps } from '@reach/router';

const CounterPage: React.FC<RouteComponentProps> = () => {
  return (
    <Box mx="auto">
      <Counter />
    </Box>
  );
};

export default CounterPage;
