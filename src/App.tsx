import { ChakraProvider } from "@chakra-ui/react";
import BravuzRoutes from "./routes/routes";

export default function App() {
  return (
    <>
      <ChakraProvider>
        <BravuzRoutes />
      </ChakraProvider>
    </>
  )
}

