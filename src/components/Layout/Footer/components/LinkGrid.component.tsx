import React from "react";
import NextLink from "next/link";
import { Box, Link, Stack } from "@chakra-ui/react";
import { footer } from "utils/links";

export const LinkGrid = () => (
  <Box>
    <Stack>
      {footer.map((page) => (
        <NextLink key={page.id} href={page.path} passHref>
          <Link fontSize="lg" textTransform="capitalize" fontWeight="semibold">
            {page.id}
          </Link>
        </NextLink>
      ))}
    </Stack>
  </Box>
);
