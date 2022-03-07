import React from "react";
import { Badge, Box, Button, Center, Heading, Img, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { saveAs } from "file-saver";
import { Section } from "../Section/Section.component";

export const HomeHero = () => {
  return (
    <Section>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
        <Stack spacing="8" shouldWrapChildren>
          <Stack spacing="4" shouldWrapChildren>
            <Badge colorScheme="purple" fontWeight="bold">
              Open to work
            </Badge>

            <Heading as="h1">{`Hi, I'm Constant Druon, I'm a Frontend Engineer Student.`}</Heading>
          </Stack>

          <Text as="h2">
            I try to make the world a better place by creating quality software that improve the lives of those around
            me.
          </Text>
          <Button
            size="md"
            className="group"
            iconSpacing="3"
            rightIcon={
              <Box
                as={FaArrowRight}
                fontSize="sm"
                transition="transform 0.2s"
                _groupHover={{ transform: "translateX(2px)" }}
              />
            }
            onClick={() => saveAs("/constant-druon-resume.pdf")}
          >
            Get my resume
          </Button>
        </Stack>

        <Center flex="1" minH="26rem" position="relative" overflow="hidden" rounded="xl">
          <Box maxW="80%">
            <Img objectFit="contain" w="full" h="full" src="/snowboard.webp" alt="nft example" position="relative" />
          </Box>
        </Center>
      </SimpleGrid>
    </Section>
  );
};
