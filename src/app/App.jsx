import { useState, useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { useGetDocs } from "../hooks/useGetDocs";

export const App = () => {
  const { loading, questions } = useGetDocs();
  console.log(loading, "loaded", questions);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
