import React from "react";
import { Text, TextProps } from "@chakra-ui/react";

export const Copyright: React.FC<TextProps> = ({ ...textProps }) => (
  <Text fontSize="sm" {...textProps}>
    &copy; {new Date().getFullYear()} Constant Druon. All rights reserved.
  </Text>
);
