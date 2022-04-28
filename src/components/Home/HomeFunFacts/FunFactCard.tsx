import React from "react";
import { Stack, Heading, Text, Icon, useColorModeValue as mode, Flex } from "@chakra-ui/react";
import { FunFactProps } from "utils/types";

export const FunFactCard = ({ funFactData }: { funFactData: FunFactProps }) => {
  return (
    <Flex bg={mode("gray.50", "whiteAlpha.100")} rounded="lg" p={{ base: "6", md: "8", lg: "10" }}>
      <Stack spacing="8">
        <Icon as={funFactData.icon} color={mode("gray.500", "gray.400")} boxSize={8} />

        <Stack spacing="4" maxW="sm">
          <Heading size="md">{funFactData.title}</Heading>
          <Text fontWeight="medium">{funFactData?.description}</Text>
        </Stack>
      </Stack>
    </Flex>
  );
};
