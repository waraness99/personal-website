import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Box, Button, Flex, HStack, VisuallyHidden } from "@chakra-ui/react";
import { DarkModeSwitch } from "src/components/DarkModeSwitch/DarkModeSwitch.component";
import { Logo } from "src/components/Logo/Logo.component";

import { MobileNav } from "./components/MobileNav.component";
import { NavLink } from "./components/NavLink.component";
import { navbar } from "utils/links";

export const Header = () => {
  const router = useRouter();

  return (
    <Box as="header" position={{ base: "static", lg: "sticky" }} zIndex="10" top="0" w="100%" borderBottomWidth="1px">
      <Box maxW="7xl" mx="auto" py="4" px={{ base: "6", md: "8" }}>
        <Flex as="nav" justify="space-between">
          <HStack spacing="8">
            <NextLink href="/" passHref>
              <Box as="a" rel="home">
                <VisuallyHidden>Your company</VisuallyHidden>
                <Logo h="6" iconColor="blue.500" />
              </Box>
            </NextLink>

            <HStack display={{ base: "none", lg: "flex" }} spacing="8">
              {navbar.map((page) => (
                <NavLink.Desktop key={page.id} active={router.pathname === page.path} href={page.path}>
                  {page.id}
                </NavLink.Desktop>
              ))}
            </HStack>
          </HStack>
          <Flex align="center">
            <HStack spacing="4">
              <DarkModeSwitch />
              <NextLink href="#" passHref>
                <Button display={{ base: "none", md: "flex" }} size="md">
                  CTA
                </Button>
              </NextLink>
            </HStack>

            <Box ml="5">
              <MobileNav />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
