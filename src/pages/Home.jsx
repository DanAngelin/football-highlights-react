import React, { Component } from 'react';
import HighlightsList from '../components/HighlightsList';
import Nav from '../components/Nav';
import { SimpleGrid,Heading, Center } from '@chakra-ui/react'

export class Home extends Component {
    constructor() {
        super();
        this.state = {
            highlights: []
        }
    }
    componentDidMount() {
        const urlApi = 'https://www.scorebat.com/video-api/v3/feed/?token=MTUwNjZfMTY0ODcyMTc2OV80YTdmNDRlNTcyYjA0MDRkMTFmMDY0YmI1YmZlZjUyN2EwNGIwN2Ey';
        fetch(urlApi)
        .then(response => response.json())
        .then(data => {
          this.setState({highlights: data.response})
        })
    }
  render() {

    return (
        <div>
          <Nav />
          <Heading as='h2' size='2xl' marginBottom='10px' textAlign='center'>Football Highlights</Heading>
          <SimpleGrid columns={1} spacing={10}>
                <HighlightsList highlights={this.state.highlights} />
                </SimpleGrid>
      </div>
    )
  }
}

export default Home