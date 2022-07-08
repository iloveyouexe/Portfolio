import React from "react";
import {
  Container,
  Box,
  Text,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";

const Landing = () => {
  return (
    <Container>
      <Heading as="h3" variant="section-title">
        Work
      </Heading>
      <Paragraph>
        Hunter is a full-stack developer based in Birmingham with a passion for
        building digital services/applications geared towards fluidity,
        simplicity and streamlining processes, all while maintaing a polished
        aesthetic. He has an obsession with planning, designing, and solving
        real-life problems with code.
      </Paragraph>
    </Container>
  );
};

export default Landing;
