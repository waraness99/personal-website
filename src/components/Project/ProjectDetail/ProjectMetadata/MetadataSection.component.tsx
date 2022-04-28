import React from "react";
import { Heading, Stack } from "@chakra-ui/react";

export const MetadataSection = ({ title, children }: { title: string; children: any }) => (
  <Stack spacing="4">
    <Heading size="md">{title}</Heading>
    {children}
  </Stack>
);
