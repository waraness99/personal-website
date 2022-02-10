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
          <H1>Next.js - Chakra UI Starter project</H1>

          <Stack spacing="6">
            <Text fontSize="xl">
              This is the a quick starter project using <Code fontSize="lg">Next.js</Code> +{" "}
              <Code fontSize="lg">chakra-ui</Code> + <Code fontSize="lg">TypeScript</Code>.
            </Text>
            <Text fontSize="xl">It also includes a basic layout configuration and dark mode.</Text>
            <Text fontSize="xl">Created with ❤️ by Waraness.</Text>
          </Stack>
        </Stack>
      </Section>
    </PageLayout>
  );
};
export default Home;
