import React from 'react'
import { Grid, Box, chakra, Flex, Image, Text } from '@chakra-ui/react'

const Group = ({groups}) => {
    console.log(groups.A.teams[0].flag)
    const GroupCard = chakra(Box, {
        baseStyle: {
            bg: "#56042C",
            borderRadius: "6px",
            padding: "24px",
            display: "flex",
            textAlign: "center"
        }
    })
  return (
    <Grid templateColumns="repeat(auto-fit, minmax(15rem, 1fr))" gap="5" justifyContent="center">
    <GroupCard>
        <Flex flexDirection='column'>
                        <Text color="#49BCE3" fontSize='2xl'>Group A</Text>
                        <Flex alignItems="center" gap="10px">
                        <Image
                boxSize='50px'
                objectFit='contain'
                src={groups.A.teams[0].flag}
                alt={groups.A.teams[0].name}
            />
            <Text color="#FEC310">{groups.A.teams[0].name}</Text>
                    </Flex>
        </Flex>
    </GroupCard>
    </Grid>
  )
}

export default Group