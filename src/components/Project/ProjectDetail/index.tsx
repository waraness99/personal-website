import React from "react";
import Link from "next/link";
import { Heading, Text, Stack, Box, Grid, Button } from "@chakra-ui/react";
import { IoArrowBack } from "react-icons/io5";

import { useAirtable } from "src/hooks/useAirtable";
import { Section } from "src/components/Section";
import { MarkdownRenderer } from "src/components/MarkdownRenderer";

import { ProjectCarousel } from "./ProjectCarousel.component";
import { ProjectMetadata } from "./ProjectMetadata";

import { ProjectProps } from "utils/types";

export const ProjectPage = ({ id }: { id: string | string[] }) => {
  const project = useAirtable(`getProjects/${id}`);
  const projectInfo: ProjectProps = project?.data?.fields;

  return (
    <Section>
      <Box>
        <Stack mb="8" shouldWrapChildren>
          <Link href="/projects" as={`/projects`} passHref>
            <Button variant="link" leftIcon={<IoArrowBack />}>
              Other projects
            </Button>
          </Link>
          <Heading as="h1" size="xl">
            {projectInfo?.name}
          </Heading>
          <Text>{projectInfo?.shortDescription}</Text>
        </Stack>

        <Box maxW={{ base: "xl", md: "7xl" }} mx="auto" mb="12">
          <Grid templateColumns={{ base: "1fr", md: "1fr 360px" }} gap="48px">
            <ProjectCarousel images={projectInfo?.images} />
            <ProjectMetadata projectInfo={projectInfo} />
          </Grid>
        </Box>

        <MarkdownRenderer content={projectInfo?.longDescription} />
      </Box>
    </Section>
  );
};
