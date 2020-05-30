import React from 'react';
import { Button as CButton, ButtonProps } from '@chakra-ui/core';

interface Props extends ButtonProps {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  children,
  className,
  disabled = false,
  ...otherProps
}) => {
  return (
    <CButton
      {...otherProps}
      className={className}
      isDisabled={disabled}
      px={4}
      py={2}
      rounded="sm"
      lineHeight="shorter"
      color="gray.900"
      bg="gray.300"
      userSelect="none"
      cursor="pointer"
      _focus={{
        outline: 'none',
        boxShadow: 'outline'
      }}
      _hover={{
        color: 'black',
        bg: 'orange.400'
      }}
      _disabled={{
        opacity: 0.5,
        color: 'gray.900',
        bg: 'gray.300',
        cursor: 'not-allowed'
      }}
    >
      {children}
    </CButton>
  );
};

export default Button;
