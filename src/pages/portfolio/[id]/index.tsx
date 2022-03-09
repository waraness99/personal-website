import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Heading, Text } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

import { useAirtable } from "src/hooks/useAirtable";
import { Section } from "src/components/Section/Section.component";
import ReactMarkdown from "react-markdown";

const ProjectDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const portfolio = useAirtable("getPortfolio");
  const projectInfo = [...portfolio.data].find((oneProject) => oneProject.id === id)?.fields;

  const newTheme = {
    p: (props: { children: any }) => {
      const { children } = props;
      return (
        <Text mb={2} fontSize={"12px"} color="red.500">
          {children}
        </Text>
      );
    },
    h1: (props: { children: any }) => {
      const { children } = props;
      return (
        <Text mb={2} fontSize={"12px"} color="green.500">
          {children}
        </Text>
      );
    },
  };

  return (
    <Section>
      <Heading as="h1" size="xl">
        {projectInfo?.name}
      </Heading>
      <ReactMarkdown components={ChakraUIRenderer(newTheme)} skipHtml>
        {projectInfo?.longDescription}
      </ReactMarkdown>
    </Section>
  );
};
export default ProjectDetail;
