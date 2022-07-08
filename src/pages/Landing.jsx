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
import { BioSection, BioYear } from "../components/Bio";

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

      <Heading as="h3" variant="section-title">
        Bio
      </Heading>
      <BioSection>
        <BioYear>1997</BioYear>
        Born in Birmingham, Alabama.
      </BioSection>
      <BioSection>
        <BioYear>2014</BioYear>
        Completed the Shelby County School of Technology Cisco Networking
        Program.
      </BioSection>
      <BioSection>
        <BioYear>2015</BioYear>
        Worked at Mercedes Benz of Birmingham.
      </BioSection>
      <BioSection>
        <BioYear>2019</BioYear>
        Worked at Chase Bays.
      </BioSection>
      <BioSection>
        <BioYear>2022</BioYear>
        Graduated from Innovate Birmingham's Web Development bootcamp.
      </BioSection>
      <BioSection>
        <BioYear>2022 to present</BioYear>
        Works at Bradley Arant boult Cummings LLP.
      </BioSection>
    </Container>
  );
};

export default Landing;
