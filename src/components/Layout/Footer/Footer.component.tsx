import React from "react";
import { Box, Stack, StackDivider, Text } from "@chakra-ui/react";

import { Logo } from "src/components/Logo/Logo.component";

import { Copyright } from "./components/Copyright.component";
import { LinkGrid } from "./components/LinkGrid.component";

export const Footer: React.FC = () => {
  return (
    <Box mt="24">
      <Box borderTopWidth="1px">
        <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: "4", md: "8" }}>
          <Stack spacing="10" divider={<StackDivider />}>
            <Stack direction={{ base: "column", lg: "row" }} spacing={{ base: "10", lg: "28" }}>
              <Stack spacing="8" flex="1" shouldWrapChildren>
                <Logo />
                <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Stack>

              <LinkGrid />
            </Stack>
            <Stack direction={{ base: "column-reverse", md: "row" }} justifyContent="space-between" alignItems="center">
              <Copyright />
              <Text fontSize="sm">Duis aute irure dolor</Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
