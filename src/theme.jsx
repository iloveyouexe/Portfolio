import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  900: "#161316",
  800: "#00DCF5",
  700: "#E4FF1A",
};

const fonts = {
  heading: "Gantari",
  body: "Gantari",
};

const theme = extendTheme({ config, colors, fonts });
export default theme;
