import React from "react";
import { Box, Text, useColorModeValue as mode, Link } from "@chakra-ui/react";
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
    a: (props: { children: any; href: string }) => {
      const { children, href } = props;
      return (
        <Link href={href} isExternal>
          {children}
        </Link>
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
