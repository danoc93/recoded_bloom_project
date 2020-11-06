import React from "react";
import styled from "styled-components";
import HeadAndGlobalStyles from "../components/HeadAndGlobalStyles";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const FavoriteImage = styled.img`
  max-width: 100%;
  //TODO: Set the border radius to the 'br' CSS variable in the GlobalStyle component.
  border-radius: 1px;
`;

const AboutMe = (props) => {
  return (
    <>
      <HeadAndGlobalStyles />

      <Layout>
        <Navbar />

        <main>
          {'TODO: Create components for the rest of your personal information!'}
          <FavoriteImage src={props.image} alt="My favourite picture" />>
        </main>
      </Layout>
    </>
  );
}

// TODO: Change this to return your personal details!
export const getStaticProps = async (query, res, req) => {};

export default AboutMe;
