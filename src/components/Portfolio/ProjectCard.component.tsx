import React from "react";
import Link from "next/link";
import { Stack, Text, Image, useColorModeValue as mode, Box, Tag, WrapItem, Wrap } from "@chakra-ui/react";

export const ProjectCard = ({ id, projectInfo }: { id: string; projectInfo: any }) => {
  return (
    <Link key={id} href="/portfolio/[id]" as={`/portfolio/${id}`} passHref>
      <Box className="group">
        <Box position="relative" h="64" overflow="hidden" bg={mode("gray.100", "whiteAlpha.100")} rounded="lg">
          {projectInfo?.primaryImage && (
            <Image
              objectFit="cover"
              h="full"
              w="full"
              src={projectInfo?.primaryImage}
              alt={`Preview of ${projectInfo?.name} project`}
              transition="transform 0.2s"
              _groupHover={{ transform: "scale(1.1)", filter: "auto", brightness: "40%" }}
            />
          )}
        </Box>

        <Stack spacing="4" py="4">
          <Box>
            <Text fontSize="xl" fontWeight="bold" color={mode("gray.700", "white")}>
              {projectInfo?.name}
            </Text>
            <Text fontSize="base" noOfLines={2}>
              {projectInfo?.shortDescription}
            </Text>
          </Box>

          <Wrap>
            {projectInfo?.technicalStack &&
              projectInfo?.technicalStack.map((oneLanguage: any) => (
                <WrapItem key={oneLanguage}>
                  <Tag size="sm">{oneLanguage}</Tag>
                </WrapItem>
              ))}
          </Wrap>
        </Stack>
      </Box>
    </Link>
  );
};
