import React from "react";
import Link from "next/link";
import styled from "styled-components";

const NavWrapper = styled.nav`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const NavConstraint = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-right: 1em;

  a {
    text-decoration: ${props => (props.active ? 'underline' : 'none')};
    font-weight: bold;
  }
`;

const Navbar = () => {
  const pathName = process.browser ? window.location.pathname : null;

  return (
    <NavWrapper>
      <NavConstraint>
        <NavItem active={pathName === "/"}>
          <Link href="/">
            <a>My To Do List</a>
          </Link>
        </NavItem>
        <NavItem active={pathName === "/about-me"}>
          <Link href="/about-me">
            <a>About Me</a>
          </Link>
        </NavItem>
      </NavConstraint>
    </NavWrapper>
  );
};

export default Navbar;
