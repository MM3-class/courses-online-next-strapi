"use client";
import Image from "next/image";
import WidthWrapper from "./WidthWrapper";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const Header = () => {
  const { user } = useUser();
  const [isLogged, setIsLogged] = useState();
  const pathname = usePathname();
  useEffect(() => {
    setIsLogged(window.location.href.toString().includes("signIn" || "signUp"));
  }, []);
  return (
    <header>
      <WidthWrapper>
        {!isLogged && (
          <Navbar collapseOnSelect className="bg-body-transparent">
            <Container>
              <Navbar.Brand href="/">
                <Image
                  src="/assets/logo.png"
                  className=""
                  width={50}
                  height={50}
                  alt="logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse
                id="responsive-navbar-nav"
                className="justify-content-end"
              >
                {user ? (
                  <Nav className="flex items-center gap-2">
                    {user.fullName}
                    <UserButton afterSignOutUrl={pathname} />
                  </Nav>
                ) : (
                  <Nav className="space-x-6">
                    <Nav.Link
                      className="bg-primary rounded-xl text-center sm:w-32 text-white text-lg"
                      href="/signIn"
                    >
                      Sign in
                    </Nav.Link>
                    <Nav.Link
                      className="border-primary rounded-xl text-center sm:w-32 border text-lg"
                      href="/signUp"
                    >
                      Sign up
                    </Nav.Link>
                  </Nav>
                )}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )}
      </WidthWrapper>
    </header>
  );
};

export default Header;
