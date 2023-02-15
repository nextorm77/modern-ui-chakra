import { Container, Flex, VStack } from "@chakra-ui/react";
import Details from "@/src/sections/details";

const IndexPage = () => (
  <Container maxW="container.xl" p={0}>
    <Flex h="100vh" py={20}>
      <Details />
      <VStack w="full" h="full" alignItems="flex-start" bg="gray.50"></VStack>
    </Flex>
  </Container>
);

export default IndexPage;
