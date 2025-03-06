import { JSX } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function Header(): JSX.Element {
    return (
        <Flex
            p={'10px 30px'}
            flexDir={"row"}
            justify={"space-between"}
        >
            <Box>
                <Text fontSize={20} fontWeight={'bold'}>Clothes Store</Text>
            </Box>
            <Flex gap={2}>
                <Text fontSize={15} fontWeight={'bold'}>Início</Text>
                <Text fontSize={15} fontWeight={'bold'}>Produtos</Text>
                <Text fontSize={15} fontWeight={'bold'}>Contactos</Text>
            </Flex>
            <Box>
                <Text fontSize={15} fontWeight={'bold'}>Carrinho</Text>
            </Box>
        </Flex>
    )
}
