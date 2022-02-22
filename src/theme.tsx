import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Heading: {
      defaultProps: {
        size: "xl",
      },
    },
    Text: {
      baseStyle: ({ colorMode }: { colorMode: any }) => ({
        color: colorMode === "light" ? "gray.500" : "gray.200",
        fontSize: "xl",
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
