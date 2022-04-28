import React from "react";
import type { NextPage } from "next";
import { Stack, Heading, Text } from "@chakra-ui/react";

import { Section } from "src/components/Section";
import { ProjectGrid } from "src/components/Project/ProjectGrid";

const Projects: NextPage = () => {
  return (
    <Section>
      <Stack spacing="4" shouldWrapChildren mb="12">
        <Heading as="h1" size="xl">
          Portfolio
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </Text>
      </Stack>

      <ProjectGrid />
    </Section>
  );
};
export default Projects;
