import React, { Children } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Constraint = styled.div`
  max-width: var(--constraint-mw);
  width: 100%;
  padding: 5vw;
`

const Layout = (props) => {
  return (
    <Container>
      <Constraint>
        {props.children}
      </Constraint>
    </Container>
  );
}

export default Layout;
