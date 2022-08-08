import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Box, Text, chakra } from '@chakra-ui/react';


const HighlightsItem = function(props) {

    const {title, competition, thumbnail, date, videos, } = props;
    console.log(thumbnail)
    const WhiteCard = chakra(Box, {
        baseStyle: {
            bg: "white",
            borderRadius: "6px",
            padding: "24px",
            display: "flex",
            textAlign: "center"
        }
    })

    return(
            <WhiteCard>
                <Link to={`/video/${videos[0].id}`} state={videos} >
                    <Image mb="3" src={thumbnail} alt='Match Highlight' />
                    <Text fontSize="xl">⚽ { title } </Text>
                    <p> { competition }</p>
                    <p> { date } </p>
                </Link>
            </WhiteCard>
    );
}



export default HighlightsItem;