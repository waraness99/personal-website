import React, { useState } from "react";
import { Stack, Image, HStack, Center } from "@chakra-ui/react";
import ReactPlayer from "react-player";

import { isVideo } from "utils/video";
import { ProjectImageProps } from "utils/types";

export const ProjectCarousel = ({ images }: { images?: Array<ProjectImageProps> }) => {
  const [currentShowcasedIndex, setCurrentShowcasedIndex] = useState(0);

  return (
    <Stack>
      <Center
        bg="black"
        shadow="lg"
        minH={{ base: "320px", lg: "480px" }}
        maxH="525px"
        position="relative"
        overflowY="auto"
        rounded="lg"
      >
        {images &&
          (isVideo(images[currentShowcasedIndex].url) ? (
            <ReactPlayer url={images[currentShowcasedIndex].url} width="100%" height="100%" controls />
          ) : (
            <Image src={images[currentShowcasedIndex].url} alt={images[currentShowcasedIndex].name} rounded="md" />
          ))}
      </Center>

      {images && images.length > 1 && (
        <HStack spacing="4" overflowX="auto" py="4">
          {images.map((image, index) => (
            <Image
              key={image.name}
              src={image.url}
              alt={image.name}
              onClick={() => setCurrentShowcasedIndex(index)}
              width="auto"
              height="16"
              rounded="md"
            />
          ))}
        </HStack>
      )}
    </Stack>
  );
};
