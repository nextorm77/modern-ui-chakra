import { Container, Flex } from "@chakra-ui/react";
import Details from "@/src/sections/details";
import Cart from "@/src/sections/cart";

const IndexPage = () => (
  <Container maxW="container.xl" p={0}>
    <Flex
      /* 
      the way to achive responsive design in Chakra UI -- the object syntax
      In case we want to change between two values because it's simpler*/
      h={{ base: "auto", md: "100vh" }}
      /* 
      the way to achive responsive design in Chakra UI -- the array syntax
      If we want to provide different values for every breakpoint
      */
      py={[0, 10, 20]}
      direction={{ base: "column-reverse", md: "row" }}
    >
      <Details />
      <Cart />
    </Flex>
  </Container>
);

export default IndexPage;
