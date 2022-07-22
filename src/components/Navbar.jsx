import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import brandLogo from "../assets/brandLogoMain.png";
import { FaGithub } from "react-icons/fa";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href=""
  >
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Image
              onClick={(e) => (window.location.href = "/")}
              src={brandLogo}
              backgroundPosition="center"
              objectFit="cover"
              cursor={"pointer"}
              width="100px"
            />
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={5}>
              <Button
                onClick={(e) =>
                  window.open(
                    "https://github.com/iloveyouexe/Portfolio",
                    "_blank"
                  )
                }
                leftIcon={<FaGithub />}
              >
                Source
              </Button>
              <Button onClick={(e) => (window.location.href = "/about")}>
                About
              </Button>
              <Button onClick={(e) => (window.location.href = "/projects")}>
                Projects
              </Button>
              <Button onClick={toggleColorMode}>
                {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
