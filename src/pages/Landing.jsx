import React from "react";
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";
import { BioSection, BioYear } from "../components/Bio";
import profilePic from "../assets/profilepicture.png";
import brandLogo from "../assets/brandLogoMain.png";

const Landing = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        mt={3}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.600", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        <Image src={brandLogo} backgroundPosition="center" objectFit="cover" />
        Hello, I'm an indie app developer based in Birmingham!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2">Hunter Hamilton</Heading>
          <p>Digital Craftsman ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src={profilePic}
              alt="Picture of the author"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Heading as="h3">Work</Heading>
      <Paragraph>
        Hunter is a full-stack developer based in Birmingham with a passion for
        building digital services/applications geared towards fluidity,
        simplicity and streamlining processes, all while maintaing a polished
        aesthetic. He has an obsession with planning, designing, and solving
        real-life problems with code.
      </Paragraph>

      <Heading as="h3">Bio</Heading>
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
