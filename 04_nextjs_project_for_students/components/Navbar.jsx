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
`;

const NavConstraint = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-right: 1em;

  a {
    // TODO: Use dynamic properties to highlight if its active.
    text-decoration: none;
    font-weight: bold;
  }
`;

//TODO: Add a link to your new about-me page
const Navbar = () => {
  const [currentPath, setCurrentPath] = React.useState(null);

  React.useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <NavWrapper>
      <NavConstraint>
        <NavItem active={currentPath === "/"}>
          <Link href="/">
            <a>My To Do List</a>
          </Link>
        </NavItem>
      </NavConstraint>
    </NavWrapper>
  );
};

export default Navbar;
