import React, { useState, useEffect } from 'react';
import HighlightsItem from "./HighlightsItem";
import { Grid } from '@chakra-ui/react';

function HighlightsList() {

  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    fetch("https://www.scorebat.com/video-api/v3/feed/?token=MTgxNzdfMTY1MzY4MzkzNV9kYjYzMWU5N2RiYTZmMzFmOWE4NzQ5ZWVhNDAxMTk5MDkxZjczYmUz")
    .then(response => response.json())

    .then(highlights => setHighlights(highlights.response))

    .catch(error => {
      console.error(error);
  });
  }, [])

const highlightTen = highlights.slice(0, 10)

    return (
      <Grid templateColumns="repeat(auto-fit, minmax(20rem, 1fr))" gap={5}>
          {highlightTen.map((highlight, index) => {
              return <HighlightsItem
              title={highlight.title}
              competition={highlight.competition}
              thumbnail={highlight.thumbnail}
              date={highlight.date.slice(0,10)}
              videos={highlight.videos}
              matchviewUrl={highlight.matchviewUrl}
              key={index}
              highlightTen={highlightTen}
              />
          })}
      </Grid> 
    )
  }

export default HighlightsList