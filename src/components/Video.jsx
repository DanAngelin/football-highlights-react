import React, { Component } from 'react';

export class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: []
        }
    }

  render() {
    const { video } = this.props;
      console.log(video);
    return (
      <div>Video</div>
    )
  }
}

export default Video