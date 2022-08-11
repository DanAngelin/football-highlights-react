import { Box } from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Layout from './Layout/Layout';
import { RiArrowGoBackFill } from 'react-icons/ri'
import { Button, Icon } from '@chakra-ui/react';

function Video() {

  let data = useLocation();

  const video = data.state

  return (
    <Layout>
      {
        video.map((video, index) => {
          return <Box bg="whiteAlpha.900" borderRadius='lg' p={5} key={index} dangerouslySetInnerHTML={{ __html: video.embed }}></Box>
        })
      }
      <Link to="/">
        <Button pos="fixed" bottom="0" right="0" m="3" colorScheme='purple'><Icon as={RiArrowGoBackFill} mr={2} />Back</Button>
      </Link>
    </Layout>
  )
}

export default Video