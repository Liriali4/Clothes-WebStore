import { JSX } from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Footer(): JSX.Element {
    return (
        <Box 
            h={'80px'}
            bg={'#d4b6ef'}
        >
            <Text fontSize={20} fontWeight={'bold'}>Footer</Text>
        </Box>
    )
}
