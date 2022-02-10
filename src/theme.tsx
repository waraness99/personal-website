import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Heading: {
      defaultProps: {
        size: "2xl",
        letterSpacing: "tight",
        fontWeight: "extrabold",
      },
    },
    Link: {
      baseStyle: ({ colorMode }: { colorMode: any }) => ({
        color: colorMode === "light" ? "blue.500" : "blue.200",
      }),
    },
  },
});

export default theme;
