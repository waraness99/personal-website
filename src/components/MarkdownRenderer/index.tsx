import React from "react";
import { Box, Text, useColorModeValue as mode } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";

export const MarkdownRenderer = ({ content }: { content: string }) => {
  const theme = {
    p: (props: { children: any }) => {
      const { children } = props;
      return (
        <Text mb="4" color={mode("gray.700", "white")}>
          {children}
        </Text>
      );
    },
  };

  return (
    <Box>
      <ReactMarkdown components={ChakraUIRenderer(theme)} skipHtml>
        {content}
      </ReactMarkdown>
    </Box>
  );
};
