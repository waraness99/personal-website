import React from "react";
import { Box, Heading, List, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Section } from "../../Section";
import { EmploymentCard } from "./EmploymentCard";

import { useAirtable } from "src/hooks/useAirtable";

export const EmploymentHistory = () => {
  const employmentHistory = useAirtable("getEmploymentHistory");

  const sortedEmploymentHistory = [...employmentHistory.data].sort(
    (a, b) => new Date(b.fields.startDate).getTime() - new Date(a.fields.startDate).getTime(),
  );

  return (
    <Section>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing="6" shouldWrapChildren>
          <Heading as="h2" size="xl">
            Employment history
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </Text>
        </Stack>

        <Box>
          <List spacing="8">
            {!employmentHistory.isLoading &&
              sortedEmploymentHistory.map((oneEmployment) => (
                <EmploymentCard key={oneEmployment.id} job={oneEmployment.fields} />
              ))}
          </List>
        </Box>
      </SimpleGrid>
    </Section>
  );
};
