import React, { lazy } from "react";

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
      <div className="pages">{children}</div>
    </>
  );
};
