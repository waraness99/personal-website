import React from "react";
import type { NextPage } from "next";
import { Stack, Text, Code } from "@chakra-ui/react";

import { PageLayout } from "src/components/Layout/Pages/PageLayout.component";
import { Section } from "src/components/Layout/Section/Section.component";
import { H1 } from "src/components/Text/Titles.component";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Section>
        <Stack spacing="16">
          <H1>My personal website</H1>

          <Text fontSize="xl">
            My personal website is build using <Code fontSize="lg">Next.js</Code> + <Code fontSize="lg">chakra-ui</Code>{" "}
            + <Code fontSize="lg">TypeScript</Code>.
          </Text>
        </Stack>
      </Section>
    </PageLayout>
  );
};
export default Home;
