import { Box, Button } from '@chakra-ui/react';
import React from 'react'
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <Box m={12} display="flex" alignItems="center">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <Link to="/">
      <Button colorScheme='teal' size='md' ml="10">
      Home
      </Button>
      </Link>
    </Box>
  )
}

export default Nav