import React from "react";
import Link from "next/link";
import { Box, Button, Center, Heading, Img, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

import { Section } from "../Section";

export const HomePitch = () => {
  return (
    <Section>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
        <Center flex="1" overflow="hidden" rounded="xl" bg="yellow.100">
          <Img objectFit="contain" w="full" h="full" src="/constant-druon-pitch.webp" alt="constant druon pitch" />
        </Center>

        <Stack spacing="8" shouldWrapChildren>
          <Heading as="h1">{`I have had the privilege to do a lot of cool presentations for the startups I cofounded!`}</Heading>

          <Text as="h2">
            I try to make the world a better place by creating quality software that improve the lives of those around
            me.
          </Text>

          <Link href="/projects" as={`/projects`} passHref>
            <Button
              size="md"
              className="group"
              iconSpacing="3"
              variant="link"
              rightIcon={
                <Box
                  as={FaArrowRight}
                  fontSize="sm"
                  transition="transform 0.2s"
                  _groupHover={{ transform: "translateX(2px)" }}
                />
              }
            >
              Check my previous projects
            </Button>
          </Link>
        </Stack>
      </SimpleGrid>
    </Section>
  );
};
