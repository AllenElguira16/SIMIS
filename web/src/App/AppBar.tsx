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
        <NavbarBrand href="/home">
          <img src={require('../Assets/Default-Logo.png')} width={80} className="img-fluid" alt="Logo"/>
          <span>Strongholds Insurance</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={BaseNavLink} activeClassName="active" to="/home" exact>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={BaseNavLink}
                activeClassName="active"
                to="/home/client/lists"
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
