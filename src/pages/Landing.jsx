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
import brandLogo from "../assets/brandLogoMain.png";
import backgroundVideo from "../assets/backgroundvid.mp4";
import { findAllByTestId } from "@testing-library/react";

const Landing = () => {
  return (
    <Container h="calc(100vh)">
      <video
        autoPlay
        loop
        muted
        id
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Image src={brandLogo} position="relative" />
      <Box
        display={{ md: "flex" }}
        textAlign="center"
        alignItems="center"
        justifyContent="center"
      >
        <Button
          size="md"
          height="48px"
          width="150px"
          border="2px"
          borderColor="white.500"
          mt={50}
          onClick={(e) => (window.location.href = "/about")}
        >
          Enter
        </Button>
      </Box>
    </Container>
  );
};

export default Landing;
