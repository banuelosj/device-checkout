import React, { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false); // using Hooks

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>Device Checkout 2.0</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://github.com/banuelosj/device-checkout"
                target="_blank"
              >
                GitHub
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">All</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Smartphones</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Tablets</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Laptops</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Other</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Help</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
