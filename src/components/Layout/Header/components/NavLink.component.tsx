import React from "react";
import NextLink from "next/link";
import { Box, chakra, Flex, HTMLChakraProps, Icon, useColorModeValue as mode } from "@chakra-ui/react";

interface DesktopNavLinkProps extends HTMLChakraProps<"a"> {
  href: string;
  active?: boolean;
}

const DesktopNavLink: React.FC<DesktopNavLinkProps> = ({ href, active, ...rest }) => {
  return (
    <NextLink href={href} passHref>
      <chakra.a
        aria-current={active ? "page" : undefined}
        fontWeight="semibold"
        textTransform="capitalize"
        color={mode("gray.500", "gray.400")}
        _activeLink={{
          color: mode("black", "white"),
          fontWeight: "bold",
        }}
        {...rest}
      />
    </NextLink>
  );
};

interface MobileNavLinkProps {
  icon: React.ElementType;
  children: React.ReactNode;
  href: string;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ icon, children, href }) => {
  return (
    <NextLink href={href} passHref>
      <Flex
        as="a"
        m="-3"
        p="3"
        align="center"
        rounded="md"
        cursor="pointer"
        _hover={{ bg: mode(`gray.100`, `whiteAlpha.200`) }}
      >
        <Icon as={icon} color="gray.500" fontSize="xl" />
        <Box marginStart="3" fontWeight="medium" textTransform="capitalize">
          {children}
        </Box>
      </Flex>
    </NextLink>
  );
};

export const NavLink = {
  Desktop: DesktopNavLink,
  Mobile: MobileNavLink,
};
