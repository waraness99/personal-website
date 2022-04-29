import React from "react";
import dynamic from "next/dynamic";
import { Badge, Box, Button, Center, Heading, Img, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import { FaArrowRight } from "react-icons/fa";
import { saveAs } from "file-saver";

import { Section } from "../Section";

export const HomeHero = () => {
  const Spline = dynamic(() => import("@splinetool/react-spline"), {
    ssr: false,
  });

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

        <Center flex="1" minH="26rem" maxH="32rem" position="relative" overflow="hidden" rounded="xl">
          {/* <Box maxW="80%">
            <Img objectFit="contain" w="full" h="full" src="/snowboard.webp" alt="nft example" position="relative" />
          </Box> */}
          <Spline scene="https://prod.spline.design/N1cuX5F9W-d0FttG/scene.spline" />
        </Center>
      </SimpleGrid>
    </Section>
  );
};
