import { JSX } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function HomePage(): JSX.Element {

    return (
        <Box>
            <Header />
            <Flex
                p={'10px 30px'}
                h={'500px'}
                bg={'#d4b6ef'}
                align={'center'}
            >
                <Text fontSize={50} fontWeight={'bold'}>banner</Text>
            </Flex>
            <Box>
                <Text fontSize={50} fontWeight={'bold'}>Body</Text>
            </Box>
            <Footer />
        </Box>
    );
}
