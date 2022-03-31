import React from 'react';
import { Image, Box, Wrap, WrapItem, Stack, HStack } from '@chakra-ui/react'

const HighlightsItem = function(props) {

    const {title, competition, thumbnail, date} = props;
    console.log(thumbnail)

    return(
        <Wrap>
            <WrapItem>
            <Box boxShadow='md' p='6' rounded='md' bg='#234E52' borderRadius="20px" display='flex' flexDirection='column' alignItems='center' textAlign='center'>
            <h4> { title } </h4>
            <p> { competition }</p>
            <p> { date } </p>
            <Image src={thumbnail} alt='Match HighLight' />
            </Box>
            </WrapItem>
            </Wrap>
    );
}



export default HighlightsItem;