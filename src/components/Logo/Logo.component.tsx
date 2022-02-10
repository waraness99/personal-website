import React from "react";
import { Text, TextProps } from "@chakra-ui/react";

export const Logo: React.FC<TextProps> = ({ ...rest }) => {
  return (
    <Text fontSize="2xl" fontWeight="bold" {...rest}>
      Constant Druon
    </Text>
  );
};
