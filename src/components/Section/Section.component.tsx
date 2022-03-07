import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface SectionProps extends BoxProps {
  mainBg?: string;
}

export const Section: React.FC<SectionProps> = ({ mainBg, children, ...rest }) => {
  return (
    <Box as="section" py={{ base: "8", md: "12", lg: "16" }} bg={mainBg}>
      <Box maxW={{ base: "xl", md: "7xl" }} mx="auto" px={{ base: "6", md: "8" }} {...rest}>
        {children}
      </Box>
    </Box>
  );
};
