import React, { useState } from "react";
import { useRouter, Router } from "next/router";
import NProgress from "nprogress";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const NavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" role="navigation">
        {router.pathname !== "/" ? (
          <NavbarBrand href="/">Sarah Goon</NavbarBrand>
        ) : null}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/about">ABOUT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/portfolio">PORTFOLIO</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">CONTACT</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
