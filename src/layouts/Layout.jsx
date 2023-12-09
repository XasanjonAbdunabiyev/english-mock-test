import React, { lazy } from "react";
import { Container } from "@chakra-ui/react";
const PageHeader = lazy(() =>
  import("./PageHeader").then((module) => {
    return {
      default: module.PageHeader,
    };
  })
);

export const Layout = ({ children }) => {
  return (
    <>
      <PageHeader />
      <Container maxW="container.xl" className="pages">{children}</Container>
    </>
  );
};
