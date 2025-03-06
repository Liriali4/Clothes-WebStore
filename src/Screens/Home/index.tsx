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
                h={'450px'}
                bg={'#d4b6ef'}
                align={'center'}
            >
                <Text fontSize={50} fontWeight={'bold'}>banner</Text>
            </Flex>
            <Box p={'30px'}>
                <Flex py={10} justify={'space-around'}>
                    <Box
                        w={'500px'}
                        h={'300px'}
                        bg={'#d4b6ef'}
                        borderRadius={10}
                    >
                    </Box>
                    <Box
                        w={'500px'}
                        h={'300px'}
                        borderRadius={10}
                        alignContent={'center'}
                    >
                        <Text fontSize={30} fontWeight={'bold'}>Body</Text>
                        <Text fontSize={20}>
                            Texto aleatório Texto aleatório Texto aleatório Texto aleatório
                            Texto aleatório Texto aleatório Texto aleatório Texto aleatório
                            Texto aleatório Texto aleatório Texto aleatório Texto aleatório
                            Texto aleatório Texto aleatório Texto aleatório Texto aleatório
                            Texto aleatório Texto aleatório Texto aleatório Texto aleatório
                        </Text>
                    </Box>
                </Flex>
                <Flex py={10} justify={'space-around'}>
                    <Box
                        w={'500px'}
                        h={'300px'}
                        borderRadius={10}
                        alignContent={'center'}
                    >
                        <Text fontSize={30} fontWeight={'bold'}>Body</Text>
                        <Text fontSize={20}>
                            Texto aleatório Texto aleatório Texto aleatório Texto aleatório
                            Texto aleatório Texto aleatório Texto aleatório Texto aleatório
                            Texto aleatório Texto aleatório Texto aleatório Texto aleatório
                            Texto aleatório Texto aleatório Texto aleatório Texto aleatório
                            Texto aleatório Texto aleatório Texto aleatório Texto aleatório
                        </Text>
                    </Box>
                    <Box
                        w={'500px'}
                        h={'300px'}
                        bg={'#d4b6ef'}
                        borderRadius={10}
                    >
                    </Box>
                </Flex>
                <Flex py={10} justify={'space-around'}>
                    <Box
                        w={'500px'}
                        h={'300px'}
                        bg={'#d4b6ef'}
                        borderRadius={10}
                    >
                    </Box>
                    <Box
                        w={'500px'}
                        h={'300px'}
                        borderRadius={10}
                        alignContent={'center'}
                    >
                        <Text fontSize={30} fontWeight={'bold'}>Body</Text>
                        <Text fontSize={20}>
                            Texto aleatório Texto aleatório Texto aleatório Texto aleatório
                            Texto aleatório Texto aleatório Texto aleatório Texto aleatório
                            Texto aleatório Texto aleatório Texto aleatório Texto aleatório
                            Texto aleatório Texto aleatório Texto aleatório Texto aleatório
                            Texto aleatório Texto aleatório Texto aleatório Texto aleatório
                        </Text>
                    </Box>
                </Flex>
            </Box>
            <Box
                p={'0px 30px'}
                h={'300px'}
                borderRadius={10}
                alignContent={'center'}
                textAlign={'center'}
            >
                <Text fontSize={30} fontWeight={'bold'}>Body</Text>
                <Text px={'15%'} fontSize={20}>
                    Texto aleatório Texto aleatório Texto aleatório Texto aleatório
                    Texto aleatório Texto aleatório Texto aleatório Texto aleatório
                    Texto aleatório Texto aleatório Texto aleatório Texto aleatório
                    Texto aleatório Texto aleatório Texto aleatório Texto aleatório
                    Texto aleatório Texto aleatório Texto aleatório Texto aleatório
                </Text>
            </Box>
            <Footer />
        </Box>
    );
}
