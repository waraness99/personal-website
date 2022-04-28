import React from "react";
import { Box, Stack, StackDivider, Text } from "@chakra-ui/react";

import { Logo } from "src/components/Logo";

import { Copyright } from "./components/Copyright.component";
import { LinkGrid } from "./components/LinkGrid.component";

export const Footer: React.FC = () => {
  return (
    <Box mt="24">
      <Box borderTopWidth="1px">
        <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: "4", md: "8" }}>
          <Stack spacing="10" divider={<StackDivider />}>
            <Stack direction={{ base: "column", lg: "row" }} spacing={{ base: "10", lg: "28" }}>
              <Stack spacing="4" flex="1" shouldWrapChildren>
                <Logo />
                <Text fontSize="base" maxW="2xl">
                  {`Welcome to my personal website! I'm a Frontend Engineer Student. I try to make the world a better place by creating
                  quality software that improve the lives of those around me.`}
                </Text>
              </Stack>

              <LinkGrid />
            </Stack>
            <Stack direction={{ base: "column-reverse", md: "row" }} justifyContent="space-between" alignItems="center">
              <Copyright />
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
