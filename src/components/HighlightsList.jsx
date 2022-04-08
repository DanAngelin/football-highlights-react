import React, { Component } from 'react';
import HighlightsItem from "./HighlightsItem";
import Video from './Video';

function HighlightsList(props) {
  let { highlights } = props
    console.log(props.highlights)
    return (
      <div>
          {highlights.map((highlight, index) => {
              return <HighlightsItem
              title={highlight.title}
              competition={highlight.competition}
              thumbnail={highlight.thumbnail}
              date={highlight.date.slice(0,10)}
              videos={highlight.videos}
              matchviewUrl={highlight.matchviewUrl}
              key={index}
              />
          })}
      </div>
    )
  }

export default HighlightsList