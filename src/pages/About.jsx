import React from "react";
import { Container, Box, Heading, Image, Button } from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";
import { Section, Year } from "../components/Bio";
import profilePic from "../assets/profilepicture.png";
import ButtonMailto from "../components/MailButton";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Landing = () => {
  return (
    <Container>
      <Box mb={5} mt={3} p={2} textAlign="center">
        <Heading as="h4" size="lg" p={5}>
          Effort wont betray you.
        </Heading>
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2">Hunter Hamilton</Heading>
          <Paragraph>
            Application Developer: Javascript, React, Node, SQL, and PHP.{" "}
          </Paragraph>
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
              alt="Picture of the developer"
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
        simplicity and streamlining processes, all while maintaining a polished
        aesthetic. He has an obsession with planning, designing, and solving
        real-life problems with code.
      </Paragraph>

      <Heading as="h3">Bio</Heading>
      <Section>
        <Year>1997</Year>
        Born in Birmingham, Alabama.
      </Section>
      <Section>
        <Year>2014</Year>
        Completed the Shelby County School of Technology Cisco Networking
        Program.
      </Section>
      <Section>
        <Year>2015</Year>
        Worked at Mercedes Benz of Birmingham.
      </Section>
      <Section>
        <Year>2019</Year>
        Worked at Chase Bays.
      </Section>
      <Section>
        <Year>2022</Year>
        Graduated from Innovate Birmingham's Web Development bootcamp.
      </Section>
      <Section>
        <Year>2022 to present</Year>
        Works at Bradley Arant boult Cummings LLP.
      </Section>
      <Box>
        <Heading as="h3" mt={3}>
          Links
        </Heading>
      </Box>
      <Box>
        <ButtonMailto mailto="mailto:tech.hhamilton@gmail.com" /> Reach out to
        me!
      </Box>
      <Box>
        <Box>
          <Button
            onClick={(e) =>
              window.open("https://github.com/iloveyouexe", "_blank")
            }
            leftIcon={<FaGithub />}
            my={2}
            w={110}
          >
            Github
          </Button>{" "}
          Check out my github for source code on all projects!
        </Box>
      </Box>
      <Box>
        <Button
          onClick={(e) =>
            window.open(
              "https://www.linkedin.com/in/hunter-hamilton-233a9222b/",
              "_blank"
            )
          }
          leftIcon={<FaLinkedin />}
          my={2}
          w={110}
        >
          LinkedIn
        </Button>{" "}
        Connect with me on LinkedIn!
      </Box>
    </Container>
  );
};

export default Landing;
