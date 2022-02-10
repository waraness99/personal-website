import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Heading: {
      defaultProps: {
        size: "2xl",
        fontWeight: "semibold",
        lineHeight: "122%",
      },
    },
  },
});

export default theme;
