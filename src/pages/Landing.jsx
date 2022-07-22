import React from "react";
import {
  Container,
  Box,
  Heading,
  Stack,
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

const Landing = () => {
  return (
    <Container>
      <Box
        display={{ md: "flex" }}
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        m={10}
      >
        <Button
          size="md"
          height="48px"
          width="150px"
          border="2px"
          borderColor="green.500"
        >
          Enter
        </Button>
      </Box>
    </Container>
  );
};

export default Landing;
