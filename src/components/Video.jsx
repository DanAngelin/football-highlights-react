import { Box } from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from './Layout/Layout';

function Video() {

  let data = useLocation();

  const video = data.state

  return (
    <Layout>
      {
        video.map((video, index) => {
          return <Box key={index} dangerouslySetInnerHTML={{ __html: video.embed }}></Box>
        })
      }
    </Layout>
  )
}

export default Video