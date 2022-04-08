import React from 'react';
import { Link } from 'react-router-dom';
import Video from './Video';
import { Image, Box, Wrap, WrapItem, Stack, HStack } from '@chakra-ui/react'

const HighlightsItem = function(props) {

    const {title, competition, thumbnail, date, videos, matchviewUrl} = props;

    return(
        <div>
            <Box boxShadow='md' p='6' rounded='md' bg='#234E52' borderRadius="20px" display='flex' flexDirection='column' alignItems='center' justifyContent='center' textAlign='center'>
            <Link to={`/video/${videos[0].id}`}>
            <h4> { title } </h4>
            <p> { competition }</p>
            <p> { date } </p>
            <Image src={thumbnail} alt='Match HighLight' />
            </Link>
            </Box>
            </div>
    );
}



export default HighlightsItem;