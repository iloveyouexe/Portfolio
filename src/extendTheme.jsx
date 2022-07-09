import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    brand: {
      900: "#161316",
      800: "#00DCF5",
      700: "#E4FF1A",
    },
  },
  fonts: {
    heading: "Gantari",
    body: "Gantari",
  },
  fontWeights: {
    hairlines: 100,
    thing: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
});

export default customTheme;
