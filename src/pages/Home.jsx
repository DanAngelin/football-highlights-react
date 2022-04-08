import React, { useState, useEffect } from 'react';
import HighlightsList from '../components/HighlightsList';
import Video from '../components/Video';
import Nav from '../components/Nav';
import { SimpleGrid,Heading, Center } from '@chakra-ui/react'

function Home() {
  let [highlights, setHighlights] = useState([]);

  useEffect(() => {
    fetch("https://www.scorebat.com/video-api/v3/feed/?token=MTUwNjZfMTY0ODcyMTc2OV80YTdmNDRlNTcyYjA0MDRkMTFmMDY0YmI1YmZlZjUyN2EwNGIwN2Ey")
    .then(response => response.json())

    .then(highlights => setHighlights(highlights.response))
    .catch(error => {
      console.error(error);
  });
  }, [])
    console.log(highlights)
    return (
        <div>
          <Nav />
          <Heading as='h2' size='2xl' marginBottom='10px' textAlign='center'>Football Highlights</Heading>
          <SimpleGrid columns={1} spacing={10}>
                <HighlightsList highlights={highlights} />
                <Video video={highlights} />
          </SimpleGrid>
      </div>
    )
}

export default Home;
