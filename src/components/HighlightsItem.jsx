import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Box, Text, Grid, chakra } from '@chakra-ui/react';


const HighlightsItem = function({highlights, loading}) {
    if (loading) {
        return <h2>Loading...</h2>
    }

    const WhiteCard = chakra(Box, {
        baseStyle: {
            bg: "white",
            borderRadius: "6px",
            padding: "24px",
            display: "flex",
            textAlign: "center"
        }
    })

    return <Grid templateColumns="repeat(auto-fit, minmax(15rem, 1fr))" gap="5" justifyContent="center">
        {
            highlights.map((highlight, index) => {
                return <WhiteCard key={index}>
                <Link to={`/video/${highlight.videos[0].id}`} state={highlight.videos} >
                    <Image mb="3" src={highlight.thumbnail} alt='Match Highlight' />
                    <Text fontSize="md" fontWeight="bold">⚽ { highlight.title } </Text>
                    <p> { highlight.competition }</p>
                    <p> { highlight.date.slice(0, 10) } </p>
                </Link>
                </WhiteCard>
            })
        }
            </Grid>;
}



export default HighlightsItem;