import {
  FormControl,
  FormLabel,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Input,
} from "@chakra-ui/react";

const Details = () => (
  <VStack
    w="full"
    h="full"
    p={10}
    spacing={10}
    alignItems="flex-start"
    bg="gray.50"
  >
    <VStack spacing={3} alignItems="flex-start">
      <Heading size="2xl">Your details</Heading>
      <Text>If you already have an account. click here to log in.</Text>
    </VStack>
    <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input placeholder="John" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input placeholder="Doe" />
        </FormControl>
      </GridItem>
    </SimpleGrid>
  </VStack>
);

export default Details;
