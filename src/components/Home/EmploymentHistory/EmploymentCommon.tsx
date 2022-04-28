import React from "react";
import { Stack, useColorModeValue as mode, Flex } from "@chakra-ui/react";

export const EmploymentCommon = ({ children }: { children: JSX.Element | Array<JSX.Element> }) => {
  return (
    <Flex bg={mode("gray.50", "whiteAlpha.100")} rounded="lg" p={{ base: "4", md: "6", lg: "8" }}>
      <Stack spacing="4">{children}</Stack>
    </Flex>
  );
};
