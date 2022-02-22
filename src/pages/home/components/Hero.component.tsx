import React from "react";
import { Box, Button, Center, Heading, Img, Stack, Tag, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { saveAs } from "file-saver";

import { Section } from "src/components/Layout/Section/Section.component";

export const Hero = () => {
  return (
    <Section isTwoCol colAlign="center">
      <Stack spacing="8" maxW={{ lg: "xl" }} shouldWrapChildren>
        <Stack spacing="4" shouldWrapChildren>
          <Tag>Open to work</Tag>
          <Heading as="h1">{`Hi, I'm Constant Druon, I'm a Frontend Engineer Student.`}</Heading>
        </Stack>

        <Text as="h2">
          I try to make the world a better place by creating quality software that improve the lives of those around me.
        </Text>
        <Button
          size="lg"
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

      <Center flex="1" minH="26rem" maxW={{ lg: "xl" }} position="relative" overflow="hidden" rounded="xl">
        <Box maxW="80%">
          <Img objectFit="contain" w="full" h="full" src="/snowboard.webp" alt="nft example" position="relative" />
        </Box>
      </Center>
    </Section>
  );
};
