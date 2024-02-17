"use client";
import SSRProvider from "react-bootstrap/SSRProvider";
import React from "react";

const BootstrapProvider = ({ children }) => {
  return <SSRProvider>{children}</SSRProvider>;
};

export default BootstrapProvider;
