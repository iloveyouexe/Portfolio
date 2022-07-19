import React from "react";
import { FaGithub } from "react-icons/fa";
import {
  Box,
  Container,
  Heading,
  Button,
  Image,
} from "@chakra-ui/react";

import apiProject from "../assets/apiproject.gif";
import diceProject from "../assets/diceproject.gif";
import twitterProject from "../assets/twitterproject.gif";
import weatherProject from "../assets/weatherproject.gif";
import wpmProject from "../assets/wpmproject.gif";

const Projects = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} m={4} textAlign="center">
        Projects / Source
      </Heading>

      <Box
        width={500}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        alignItems="center"
        mt={10}
        mb={10}
      >
        <Image src={apiProject} />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Box
              color="white"
              fontWeight="semibold"
              textAlign="center"
              letterSpacing="wide"
              fontSize="lg"
              ml="2"
            >
              Studio Ghibli API Project
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={4}
          >
            A website utilizing FetchAPI to pull from a Studio Ghibli Films API
            that catalogs all character data, as well as movie data from all of
            Ghibli's films. I used Bootstrap for the styling, built all in
            React.
          </Box>
        </Box>
        <Button
          mb={3}
          ml={3}
          onClick={(e) =>
            window.open(
              "https://github.com/iloveyouexe/reacting-to-apis",
              "_blank"
            )
          }
          leftIcon={<FaGithub />}
        >
          Source
        </Button>
      </Box>
      <Box
        w={500}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        justifyItems="center"
        mt={10}
        mb={10}
      >
        <Image src={diceProject} />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Box
              color="white"
              fontWeight="semibold"
              textAlign="center"
              letterSpacing="wide"
              fontSize="lg"
              ml="2"
            >
              Randomized Dice Game
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={4}
          >
            A game built in Javascript with jQuery and vanilla CSS. I used
            math.floor for the functions that randomizes the dice, jQuery was
            incredibly useful for HTML document traversal, manipulation, event
            handling, and overall legibility.
          </Box>
        </Box>
        <Button
          mb={3}
          ml={3}
          onClick={(e) =>
            window.open(
              "https://github.com/iloveyouexe/Dicey-Business",
              "_blank"
            )
          }
          leftIcon={<FaGithub />}
        >
          Source
        </Button>
      </Box>
      <Box
        w={500}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        justifyItems="center"
        mt={10}
        mb={10}
      >
        <Image src={twitterProject} />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Box
              color="white"
              fontWeight="semibold"
              textAlign="center"
              letterSpacing="wide"
              fontSize="lg"
              ml="2"
            >
              Fullstack Twitter Clone
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={4}
          >
            This was a fullstack application using React, Postman, mySQL, and
            Bootstrap. The goal was to replicate twitter, (Chirpr!), this was
            one of the earlier fullstack application that I built primarily for
            functionality.
          </Box>
        </Box>
        <Button
          mb={3}
          ml={3}
          onClick={(e) =>
            window.open(
              "https://github.com/iloveyouexe/chirpr-fullstack",
              "_blank"
            )
          }
          leftIcon={<FaGithub />}
        >
          Source
        </Button>
      </Box>
      <Box
        w={500}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        justifyItems="center"
        mt={10}
        mb={10}
      >
        <Image src={wpmProject} />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Box
              color="white"
              fontWeight="semibold"
              textAlign="center"
              letterSpacing="wide"
              fontSize="lg"
              ml="2"
            >
              WPM Typing Application
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={4}
          >
            This was an incredibly fun project, I wanted to get more familiarity
            with DOM manipulation as well as a fun typing game to accurately
            gauge your words per minute.
          </Box>
        </Box>
        <Button
          mb={3}
          ml={3}
          onClick={(e) =>
            window.open("https://github.com/iloveyouexe/JustMyType", "_blank")
          }
          leftIcon={<FaGithub />}
        >
          Source
        </Button>
      </Box>
      <Box
        w={500}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        justifyItems="center"
        mt={10}
        mb={10}
      >
        <Image src={weatherProject} />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Box
              color="white"
              fontWeight="semibold"
              textAlign="center"
              letterSpacing="wide"
              fontSize="lg"
              ml="2"
            >
              React Weather Application
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={4}
          >
            I wanted to create a weather application, this time with axios
            instead of fetch to pull from an API, I used bootstrap for the
            styling of this, I wanted to put more work out there that
            highlighted my skills in UX/UI design, all built in React.
          </Box>
        </Box>
        <Button
          mb={3}
          ml={3}
          onClick={(e) =>
            window.open(
              "https://github.com/iloveyouexe/react-weather-app/",
              "_blank"
            )
          }
          leftIcon={<FaGithub />}
        >
          Source
        </Button>
      </Box>
    </Container>
  );
};

export default Projects;
