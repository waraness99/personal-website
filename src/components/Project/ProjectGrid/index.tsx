import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { ProjectCard } from "./ProjectCard.component";

import { useAirtable } from "src/hooks/useAirtable";
import { ProjectPreviewProps } from "utils/types";

export const ProjectGrid = () => {
  const portfolio = useAirtable<Array<{ id: string; fields: ProjectPreviewProps }>>("getProjects");

  if (portfolio.isLoading === true) {
    return <></>;
  }

  if (portfolio.data === undefined) {
    return <></>;
  }

  const sortedPortfolio = [...portfolio.data].sort(
    (a, b) => new Date(b.fields.date).getTime() - new Date(a.fields.date).getTime(),
  );

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
      {!portfolio.isLoading &&
        sortedPortfolio.map((oneProject) => (
          <ProjectCard key={oneProject.id} id={oneProject.id} projectInfo={oneProject.fields} />
        ))}
    </SimpleGrid>
  );
};
