import React, { useState } from "react";
import { NavLink as RouterLink, withRouter } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div role="navigation" aria-label="main navigation">
      <Navbar light expand="md">
        {props.location.pathname === "/" ? null : (
          <NavbarBrand tag={RouterLink} to="/">
            Sarah Goon
          </NavbarBrand>
        )}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={RouterLink} to="/about">
                ABOUT
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterLink} to="/portfolio" onClick={toggle}>
                PORTFOLIO
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterLink} to="/resume" onClick={toggle}>
                RÉSUMÉ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterLink} to="/contact" onClick={toggle}>
                CONTACT
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default withRouter(NavBar);
