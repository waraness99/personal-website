import React from "react";
import { HStack, Stack, Text, Image, Icon, useColorModeValue as mode, Flex } from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import { formatDate } from "utils/date";

interface EmploymentCardProps {
  data: any;
  isLoading?: boolean;
}

export const EmploymentCard: React.FC<EmploymentCardProps> = ({ data, isLoading }) => {
  return (
    <Flex
      bg={mode("gray.50", "whiteAlpha.100")}
      rounded="lg"
      p={{ base: "4", md: "6", lg: "8" }}
      h={!isLoading ? "undefined" : "40"}
    >
      {!isLoading && (
        <Stack spacing="4">
          <HStack spacing="4" flex="1" align="flex-start">
            <Image src={data?.companyLogo} alt={`logo ${data?.companyName}`} boxSize="12" rounded="md" />

            <Stack spacing="0">
              <Text color="undefined" fontWeight="bold" mt="-1">
                {`${data?.jobTitle} - ${data?.companyName}`}
              </Text>

              <HStack spacing="1">
                <Icon as={MdLocationOn} color={mode("gray.400", "gray.400")} />
                <Text fontSize="base">{data?.place}</Text>
              </HStack>
            </Stack>
          </HStack>

          <Text fontSize="base" color={mode("gray.700", "white")}>
            {data?.description}
          </Text>

          <Text fontSize="base">
            From {formatDate(new Date(data?.startDate))} to{" "}
            {data?.endDate ? formatDate(new Date(data?.endDate)) : "Today"}
          </Text>
        </Stack>
      )}
    </Flex>
  );
};
