/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Flex, Text } from '@chakra-ui/core';

import { useMst } from '../models/Root';

import Button from './Button';

interface Props {}

const Counter: React.FC<Props> = observer(() => {
  const { counter } = useMst();
  return (
    <Flex mt={20} alignItems="center" flexDirection="column">
      <Text fontWeight="bold" fontSize="2xl" textAlign="center">
        Counter
      </Text>
      <Text
        fontWeight="bold"
        fontSize="2xl"
        textAlign="center"
        css={{ fontVariant: 'tabular-nums' }}
      >
        {counter.count}
      </Text>
      <Flex mt="2" flexDirection="row">
        <Button onClick={counter.decrement}>-</Button>
        <Button ml={2} onClick={counter.increment}>
          +
        </Button>
      </Flex>
    </Flex>
  );
});

export default Counter;
