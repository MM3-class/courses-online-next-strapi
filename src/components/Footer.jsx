"use client";
import Image from "next/image";
import React, { useLayoutEffect, useState } from "react";

const Footer = () => {
  const [isLogged, setIsLogged] = useState();
  useLayoutEffect(() => {
    setIsLogged(window.location.href.toString().includes("signIn" || "signUp"));
  }, []);
  return (
    <>
      {!isLogged && (
        <footer className="bg-black p-12">
          <figure>
            <Image src="/assets/logo.png" width={100} height={100} alt="logo" />
          </figure>
        </footer>
      )}
    </>
  );
};

export default Footer;
