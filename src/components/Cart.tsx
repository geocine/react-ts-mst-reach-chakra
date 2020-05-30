/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState, ChangeEvent } from 'react';
import { Box, Flex, Text, Input } from '@chakra-ui/core';
import { observer } from 'mobx-react-lite';

import { useMst } from '../models/Root';

import Button from './Button';

const Cart: React.FC = observer(() => {
  const { cart } = useMst();

  const [name, setName] = useState('The Hobbit');
  const [price, setPrice] = useState(20);

  const isDisabled = () => {
    return name === '' || price === 0;
  };

  return (
    <Box w={64} mx="auto" mt={16}>
      <Text fontWeight="bold" fontSize="2xl" textAlign="center">
        Item Cart
      </Text>
      <Box>
        <Text color="gray.200" as="span">
          Name
        </Text>
        <Input
          bg="gray.800"
          _focus={{
            outline: 'none',
            borderColor: 'orange.400'
          }}
          mt={1}
          display="block"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (e && e.target) {
              setName(e.target.value);
            }
          }}
        />
      </Box>
      <Box mt={2}>
        <Text color="gray.200" as="span">
          Price
        </Text>
        <Input
          bg="gray.800"
          _focus={{
            outline: 'none',
            borderColor: 'orange.400'
          }}
          mt={1}
          display="block"
          w="full"
          type="number"
          min="0.0"
          step="any"
          value={price}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (e && e.target) {
              setPrice(Number(e.target.value));
            }
          }}
        />
      </Box>
      <Flex mt={4} alignItems="center">
        <Text
          css={{ fontVariantNumeric: 'tabular-nums' }}
          lineHeight="shorter"
          fontWeight="bold"
          fontSize="lg"
        >
          Items: {cart.totalItems}
        </Text>
        <Text
          css={{ fontVariantNumeric: 'tabular-nums' }}
          lineHeight="shorter"
          fontWeight="bold"
          fontSize="lg"
          ml={4}
        >
          Total: {cart.totalPrice}
        </Text>
        <Button
          disabled={isDisabled()}
          ml={4}
          onClick={() => {
            cart.addCartItem({
              name,
              price
            });
          }}
        >
          Add
        </Button>
      </Flex>
      <Box my={12} h={64} bg="gray.800" rounded="sm" overflowY="scroll">
        {cart.items.map((item, index) => {
          return (
            <Flex
              key={`${item.name}-${index}`}
              mr={2}
              px={4}
              py={2}
              alignItems="center"
              rounded="sm"
              lineHeight="shorter"
              color="gray.700"
              bg="gray.200"
              mt={index !== 0 ? 2 : 0}
            >
              <Flex flexGrow={1}>{item.name}</Flex>
              <div>{item.price}</div>
              {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
              <Text
                ml={5}
                cursor="pointer"
                userSelect="none"
                onClick={item.remove}
                role="img"
                aria-label="delete"
                as="span"
              >
                ❌
              </Text>
            </Flex>
          );
        })}
      </Box>
    </Box>
  );
});

export default Cart;
