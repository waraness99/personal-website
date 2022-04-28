import React from "react";
import { Heading, Stack, SimpleGrid, useColorModeValue as mode } from "@chakra-ui/react";
import { IoPlayOutline, IoBookOutline, IoLockClosedOutline, IoBicycle } from "react-icons/io5";
import { uuid } from "uuidv4";

import { Section } from "../../Section";
import { FunFactCard } from "./FunFactCard";

import { FunFactProps } from "utils/types";

export const HomeFunFacts = () => {
  const funFacts: FunFactProps[] = [
    {
      title: "I can pick a lock",
      description: `I love brainteasers, padlocks included! After hours of practice, I am now able to open nearly any lock. Even with paper clips!`,
      icon: IoLockClosedOutline,
    },
    {
      title: "I have cycled more than 50,000 miles",
      description: `I love brainteasers, padlocks included! After hours of practice, I am now able to open nearly any lock. Even with paper clips!`,
      icon: IoBicycle,
    },
    {
      title: "I've written a comic book",
      description: `I've worked my way up to 3x listening so I could listen to more. So far I've saved ~100 days of listening by doing this.`,
      icon: IoPlayOutline,
    },
    {
      title: "I listen to books and podcasts at 3x",
      description: `In 2017, I participated in a contest organized by France in memory of the deportees of the WWII. My comic book has been published by a publishing house!`,
      icon: IoBookOutline,
    },
  ];

  return (
    <Section>
      <Stack shouldWrapChildren>
        <Heading as="h1">{`Here are some random fun facts.`}</Heading>
        <Heading color={mode("gray.500", "gray.400")}>{`Some unique things about me.`}</Heading>
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt="12">
        {funFacts.map((funFact) => (
          <FunFactCard key={uuid()} funFactData={funFact} />
        ))}
      </SimpleGrid>
    </Section>
  );
};
