import React from "react";
import { Box, Heading, List, SimpleGrid, Stack, Text, Skeleton } from "@chakra-ui/react";
import { Section } from "../../Section";
import { EmploymentCommon } from "./EmploymentCommon";
import { EmploymentContent } from "./EmploymentContent";

import { useAirtable } from "src/hooks/useAirtable";
import { JobProps } from "utils/types";

export const EmploymentHistory = () => {
  const employmentHistory = useAirtable<Array<{ id: string; fields: JobProps }>>("getEmploymentHistory");

  if (employmentHistory.data === undefined) {
    return <></>;
  }

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
            {employmentHistory.isLoading
              ? [...Array(3).keys()].map((_, i) => (
                  <EmploymentCommon key={i}>
                    <Skeleton />
                  </EmploymentCommon>
                ))
              : sortedEmploymentHistory.map((oneEmployment) => (
                  <>
                    <EmploymentCommon>
                      <EmploymentContent key={oneEmployment.id} job={oneEmployment.fields} />
                    </EmploymentCommon>
                  </>
                ))}
          </List>
        </Box>
      </SimpleGrid>
    </Section>
  );
};
