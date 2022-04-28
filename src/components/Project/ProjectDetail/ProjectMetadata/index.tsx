import React from "react";
import { Text, Stack, Tag, Wrap, WrapItem, StackDivider } from "@chakra-ui/react";
import { IoGitBranch, IoLink } from "react-icons/io5";

import { MetadataSection } from "./MetadataSection.component";
import { ExternalLink } from "./ExternalLink.component";

import { formatDate } from "utils/date";
import { ProjectProps } from "utils/types";

export const ProjectMetadata = ({ projectInfo }: { projectInfo: ProjectProps }) => {
  const repositoryUrl = projectInfo?.repositoryUrl;
  const websiteUrl = projectInfo?.websiteUrl;

  return (
    <Stack spacing="8" divider={<StackDivider />}>
      <MetadataSection title="Project">
        <Text fontSize="md">{projectInfo?.projectType} project</Text>
        <Text fontSize="md">Published on {formatDate(projectInfo?.date)}</Text>
      </MetadataSection>

      {(repositoryUrl || websiteUrl) && (
        <MetadataSection title="Links">
          {repositoryUrl && <ExternalLink url={repositoryUrl} icon={IoGitBranch} />}
          {websiteUrl && <ExternalLink url={websiteUrl} icon={IoLink} />}
        </MetadataSection>
      )}

      <MetadataSection title="Technical Stack">
        <Wrap>
          {projectInfo?.technicalStack &&
            projectInfo?.technicalStack.map((oneLanguage: any) => (
              <WrapItem key={oneLanguage}>
                <Tag>{oneLanguage}</Tag>
              </WrapItem>
            ))}
        </Wrap>
      </MetadataSection>
    </Stack>
  );
};
