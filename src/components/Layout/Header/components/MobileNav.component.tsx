import React from "react";
import NextLink from "next/link";
import { NavLink } from "./NavLink.component";
import {
  Box,
  Button,
  Center,
  Flex,
  Portal,
  SimpleGrid,
  useBoolean,
  useFocusOnShow,
  useColorModeValue as mode,
  IconButton,
} from "@chakra-ui/react";
import { HTMLMotionProps, motion, Variants } from "framer-motion";
import { RemoveScroll } from "react-remove-scroll";
import FocusLock from "react-focus-lock";
import { navbar } from "utils/links";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const variants: Variants = {
  show: {
    display: "revert",
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  hide: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.1, ease: "easeIn" },
    transitionEnd: { display: "none" },
  },
};

const Backdrop = ({ show }: { show?: boolean }) => (
  <Portal>
    <motion.div
      initial={false}
      animate={show ? "show" : "hide"}
      transition={{ duration: 0.1 }}
      variants={{
        show: { opacity: 1, display: "revert" },
        hide: { opacity: 0, transitionEnd: { display: "none" } },
      }}
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        background: "rgba(0,0,0,0.2)",
        inset: 0,
      }}
    />
  </Portal>
);

const Transition = (props: HTMLMotionProps<"div"> & { in?: boolean }) => {
  const { in: inProp, ...rest } = props;
  return (
    <motion.div
      {...rest}
      initial={false}
      variants={variants}
      animate={inProp ? "show" : "hide"}
      style={{
        transformOrigin: "top right",
        position: "absolute",
        width: "calc(100% - 32px)",
        top: "24px",
        left: "16px",
        margin: "0 auto",
        zIndex: 1,
      }}
    />
  );
};

export const MobileNav = () => {
  const [show, { toggle, off }] = useBoolean();
  const ref = React.useRef<HTMLDivElement>(null);
  useFocusOnShow(ref, { visible: show, shouldFocus: true });

  return (
    <>
      <IconButton
        aria-label="open mobile menu"
        size="md"
        icon={<HamburgerIcon />}
        display={{ base: "block", lg: "none" }}
        onClick={toggle}
      />

      <Transition in={show}>
        <RemoveScroll enabled={show}>
          <Backdrop show={show} />
        </RemoveScroll>
        <FocusLock disabled={!show} returnFocus>
          <Box bg={mode("white", "gray.700")} rounded="lg" ref={ref} tabIndex={0} outline={0}>
            <Box pt="5" pb="6" px="5">
              <Flex justify="right">
                <IconButton aria-label="close mobile menu" size="sm" icon={<CloseIcon />} onClick={off} />
              </Flex>
              <SimpleGrid as="nav" gap="6" mt="8" columns={{ base: 1, sm: 2 }}>
                {navbar.map((page) => (
                  <NavLink.Mobile key={page.id} icon={page.icon} href={page.path}>
                    {page.id}
                  </NavLink.Mobile>
                ))}
              </SimpleGrid>

              <NextLink href="#" passHref>
                <Button mt="8" w="full">
                  CTA
                </Button>
              </NextLink>
            </Box>
          </Box>
        </FocusLock>
      </Transition>
    </>
  );
};
