import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { JSX } from "react";

export default function Products(): JSX.Element {
    return (
        <Box p={'20px 80px'}>
            <Flex
                px={'5px'}
                h={'50px'}
                justify={'space-between'}
                borderBottom={'solid 4px #d4b6ef'}
            >
                <Text>Produtos</Text>
                <Box>
                    filtro
                </Box>
            </Flex>
            <Grid
                py={'50px'}
                templateColumns={'repeat(4, 1fr)'}
                gap={10}>
                <GridItem>
                    <Box bg={'#d4b6ef'} w={'250px'} h={'350px'}>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box bg={'#d4b6ef'} w={'250px'} h={'350px'}>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box bg={'#d4b6ef'} w={'250px'} h={'350px'}>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box bg={'#d4b6ef'} w={'250px'} h={'350px'}>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box bg={'#d4b6ef'} w={'250px'} h={'350px'}>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box bg={'#d4b6ef'} w={'250px'} h={'350px'}>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box bg={'#d4b6ef'} w={'250px'} h={'350px'}>
                    </Box>
                </GridItem>
                <GridItem>
                    <Box bg={'#d4b6ef'} w={'250px'} h={'350px'}>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    )
}