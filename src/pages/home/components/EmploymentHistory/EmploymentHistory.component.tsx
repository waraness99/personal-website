import React from "react";
import { Box, Heading, List, Stack } from "@chakra-ui/react";

import { Section } from "src/components/Layout/Section/Section.component";
import { useAirtable } from "src/hooks/useAirtable";
import { Card } from "./components/Card.component";

export const EmploymentHistory = () => {
  const employmentHistory = useAirtable("getEmploymentHistory");
  console.log(employmentHistory);

  const sortedEmploymentHistory = [...employmentHistory.data].sort(
    (a, b) => new Date(b.fields.startDate).getTime() - new Date(a.fields.startDate).getTime(),
  );

  return (
    <Section isTwoCol>
      <Stack spacing="8" maxW={{ lg: "xl" }} shouldWrapChildren>
        <Heading as="h2" size="xl">
          Employment history
        </Heading>
      </Stack>

      <Box maxW={{ lg: "xl" }}>
        <List spacing="8">
          {employmentHistory.isLoading
            ? [0, 1].map((oneEmployment) => <Card key={oneEmployment} data={""} isLoading />)
            : sortedEmploymentHistory.map((oneEmployment) => (
                <Card key={oneEmployment.id} data={oneEmployment.fields} />
              ))}
        </List>
      </Box>
    </Section>
  );
};
