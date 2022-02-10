import React from "react";
import { Box, BoxProps, Spacer } from "@chakra-ui/react";
import { Header } from "src/components/Layout/Header/Header.component";
import { Footer } from "src/components/Layout/Footer/Footer.component";

interface PageLayoutProps extends BoxProps {
  hasHeader?: boolean;
  hasFooter?: boolean;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ hasHeader, hasFooter, children, ...rest }) => {
  return (
    <Box minHeight="100vh" {...rest}>
      {(hasHeader ?? true) && <Header />}

      {children}
      <Spacer />

      {(hasFooter ?? true) && <Footer />}
    </Box>
  );
};
