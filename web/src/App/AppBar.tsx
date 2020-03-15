import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { NavLink as BaseNavLink } from "react-router-dom";

/**
 * AppBar header
 */
const AppBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Strongholds Insurance</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={BaseNavLink} activeClassName="active" to="/" exact>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={BaseNavLink}
                activeClassName="active"
                to="/client-lists"
                exact
              >
                Clients
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AppBar;
