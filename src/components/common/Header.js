import React, { useState } from "react";
import AddChart from "./AddChart";
import AddAlert from "./AddAlert";
import { Nav, NavItem, NavLink, Navbar } from "reactstrap";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Navbar>
        <Nav className="mr-auto">
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/dashboard">Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
        </Nav>
        {window.location.pathname === "/dashboard" && (
          <AddChart dropdownOpen={dropdownOpen} toggle={toggle} />
        )}
        {window.location.pathname === "/dashboard" && <AddAlert />}
      </Navbar>
    </div>
  );
};

export default Header;
