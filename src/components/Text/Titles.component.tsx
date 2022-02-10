import React from "react";
import { Heading, HeadingProps } from "@chakra-ui/react";

const H1: React.FC<HeadingProps> = ({ ...rest }) => {
  return <Heading as="h1" size="2xl" fontWeight="semibold" lineHeight="122%" {...rest} />;
};

const H2: React.FC<HeadingProps> = ({ ...rest }) => {
  return <Heading as="h2" size="xl" fontWeight="semibold" lineHeight="122%" {...rest} />;
};

export { H1, H2 };
