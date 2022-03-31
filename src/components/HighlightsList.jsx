import React, { Component } from 'react';
import HighlightsItem from "./HighlightsItem"

export class HighlightsList extends Component {
  render() {
    const { highlights } = this.props;
    console.log(highlights)
    return (
      <div>
          {highlights.map((highlight, index) => {
              return <HighlightsItem
              title={highlight.title}
              competition={highlight.competition}
              thumbnail={highlight.thumbnail}
              date={highlight.date}
              key={index}
              />
          })}
      </div>
    )
  }
}

export default HighlightsList