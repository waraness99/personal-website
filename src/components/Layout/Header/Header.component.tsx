import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Box, Button, Flex, HStack, useColorModeValue as mode } from "@chakra-ui/react";
import { saveAs } from "file-saver";

import { Logo } from "src/components/Logo/Logo.component";
import { DarkModeSwitch } from "src/components/DarkModeSwitch/DarkModeSwitch.component";

import { MobileNav } from "./components/MobileNav.component";
import { NavLink } from "./components/NavLink.component";
import { navbar } from "utils/links";

export const Header = () => {
  const router = useRouter();

  return (
    <Box
      as="header"
      position={{ base: "static", lg: "sticky" }}
      zIndex="10"
      top="0"
      w="100%"
      borderBottomWidth="1px"
      bg={mode("white", "gray.800")}
    >
      <Box maxW="7xl" mx="auto" py="4" px={{ base: "6", md: "8" }}>
        <Flex as="nav" justify="space-between">
          <HStack flex="1" justify="space-between">
            <NextLink href="/" passHref>
              <Box as="a" rel="home">
                <Logo />
              </Box>
            </NextLink>

            <HStack display={{ base: "none", lg: "flex" }} spacing="8">
              {navbar.map((page) => (
                <NavLink.Desktop key={page.id} active={router.pathname === page.path} href={page.path}>
                  {page.id}
                </NavLink.Desktop>
              ))}
            </HStack>

            <HStack>
              <DarkModeSwitch />

              <NextLink href="#" passHref>
                <Button
                  display={{ base: "none", lg: "flex" }}
                  size="md"
                  onClick={() => saveAs("/constant-druon-resume.pdf")}
                >
                  Get my resume
                </Button>
              </NextLink>

              <MobileNav />
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};
