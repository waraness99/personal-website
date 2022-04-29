import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  components: {
    Heading: {
      defaultProps: {
        size: "xl",
      },
    },
    Text: {
      baseStyle: ({ colorMode }: { colorMode: any }) => ({
        color: colorMode === "light" ? "gray.500" : "gray.400",
        fontSize: "lg",
      }),
    },
    Link: {
      baseStyle: ({ colorMode }: { colorMode: any }) => ({
        color: colorMode === "light" ? "blue.500" : "blue.400",
      }),
    },
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
    },
  },
});

export default theme;
