import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Heading } from "@chakra-ui/react";

import { useAirtable } from "src/hooks/useAirtable";
import { Section } from "src/components/Section/Section.component";

const ProjectDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const portfolio = useAirtable("getPortfolio");
  const projectInfo = [...portfolio.data].find((oneProject) => oneProject.id === id)?.fields;

  return (
    <Section>
      <Heading as="h1" size="xl">
        {projectInfo?.name}
      </Heading>
    </Section>
  );
};
export default ProjectDetail;
