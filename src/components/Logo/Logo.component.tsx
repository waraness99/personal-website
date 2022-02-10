import React from "react";
import { Text, TextProps } from "@chakra-ui/react";

export const Logo: React.FC<TextProps> = ({ ...rest }) => {
  return (
    <Text fontSize="2xl" letterSpacing="tight" fontWeight="extrabold" {...rest}>
      Constant Druon
    </Text>
  );
};
