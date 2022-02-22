import React from "react";
import { HStack, Stack, Text, Image, Icon, useColorModeValue as mode, Badge, Flex } from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";

interface CardProps {
  data: any;
  isLoading?: boolean;
}

export const Card: React.FC<CardProps> = ({ data, isLoading }) => {
  return (
    <Flex
      bg={mode("gray.100", "whiteAlpha.100")}
      rounded="lg"
      p={{ base: "4", md: "6", lg: "8" }}
      h={!isLoading ? "undefined" : "40"}
    >
      {!isLoading && (
        <Stack spacing="4">
          <HStack spacing="4" flex="1" align="flex-start">
            <Image src={data?.companyLogo} alt={`logo ${data?.companyName}`} boxSize="12" rounded="md" />

            <Stack spacing="0">
              <HStack spacing="2">
                <Text color="undefined" fontWeight="bold" mt="-1">
                  {`${data?.jobTitle} - ${data?.companyName}`}
                </Text>

                {data?.isCurrentJob && <Badge colorScheme="purple">Current Job</Badge>}
              </HStack>

              <HStack spacing="1">
                <Icon as={MdLocationOn} color={mode("gray.400", "gray.200")} />

                <Text fontSize="base">{data?.place}</Text>
              </HStack>
            </Stack>
          </HStack>

          <Text fontSize="base">{data?.description}</Text>

          <HStack spacing="1">
            <Icon as={MdLocationOn} color={mode("gray.400", "gray.200")} />
            <Text fontSize="base">
              from {data?.startDate} to {data?.startDate}
            </Text>
          </HStack>
        </Stack>
      )}
    </Flex>
  );
};
