import { JSX, PropsWithChildren } from "react";
import Header from "./header";
import { Box } from "@chakra-ui/react";
import Footer from "./footer";

export default function BaseLayout(props: PropsWithChildren): JSX.Element{
    return(
        <Box height="auto" overflow={'hidden'}>
        <Header/>
        <Box >
                {props.children}
        </Box>
        <Footer/>
    </Box>
    )
}