import React from "react";
import { HStack, Stack, Text, Image, Icon, useColorModeValue as mode, Flex } from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import { formatDate } from "utils/date";

type JobProps = {
  companyName: string;
  companyLogo: string;
  jobTitle: string;
  place: string;
  description: string;
  startDate: string;
  endDate: string;
};

export const EmploymentCard = ({ job }: { job: JobProps }) => {
  return (
    <Flex bg={mode("gray.50", "whiteAlpha.100")} rounded="lg" p={{ base: "4", md: "6", lg: "8" }}>
      <Stack spacing="4">
        <HStack spacing="4" flex="1" align="flex-start">
          <Image src={job?.companyLogo} alt={`logo ${job?.companyName}`} boxSize="12" rounded="md" />

          <Stack spacing="0">
            <Text size="md" color="undefined" fontWeight="bold" mt="-1">
              {`${job?.jobTitle} - ${job?.companyName}`}
            </Text>

            <HStack spacing="1">
              <Icon as={MdLocationOn} color={mode("gray.400", "gray.400")} />
              <Text fontSize="base">{job?.place}</Text>
            </HStack>
          </Stack>
        </HStack>

        <Text fontSize="base" color={mode("gray.700", "white")}>
          {job?.description}
        </Text>

        <Text fontSize="base">
          From {formatDate(job?.startDate)} to {job?.endDate ? formatDate(job?.endDate) : "Today"}
        </Text>
      </Stack>
    </Flex>
  );
};
