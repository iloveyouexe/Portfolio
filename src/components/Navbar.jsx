import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import brandLogo from "../assets/logo.png";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Image
              src={brandLogo}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              maxW="125px"
              mx="auto"
            />
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

// import {
//   Box,
//   Button,
//   ButtonGroup,
//   Container,
//   Flex,
//   HStack,
//   Image,
//   Spacer,
// } from "@chakra-ui/react";
// import * as React from "react";

// export const navBar = () => {
//   return (
//     <>
//       <Image
//         src={brandLogo}
//         backgroundPosition="center"
//         backgroundRepeat="no-repeat"
//         maxW="25%"
//         mx="auto"
//       />
//       <Box as="header">
//         <Box
//           bg="#161316"
//           align="center"
//           pos="relative"
//           justify="center"
//           position="static"
//         >
//           <Container py={{ base: "4", lg: "5" }}>
//             <HStack spacing="0" justify="space-between">
//               <Spacer />
//               <Flex justify="space-between" flex="1">
//                 <ButtonGroup variant="link" spacing="6">
//                   {["Home", "About", "Projects"].map((item) => (
//                     <Button key={item}>{item}</Button>
//                   ))}
//                 </ButtonGroup>
//               </Flex>
//             </HStack>
//           </Container>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default navBar;
