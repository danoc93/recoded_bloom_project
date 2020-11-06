import React from "react";
import styled from "styled-components";
import HeadAndGlobalStyles from "../components/HeadAndGlobalStyles";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const FavoriteImage = styled.img`
  max-width: 100%;
  border-radius: var(--br);
`;

const AboutMe = (props) => {
  return (
    <>
      <HeadAndGlobalStyles />

      <Layout>
        <Navbar />

        <main>
          <h1>About Me</h1>

          <p>
            {`Hello! My name is ${props.name}, I am ${props.age} and I live in ${props.city}!`}
          </p>

          <p>Here is an image of my favourite place in the world</p>

          <FavoriteImage src={props.image} alt="My favourite picture" />
        </main>
      </Layout>
    </>
  );
}

export const getStaticProps = async (query, res, req) => {
  return {
    props: {
      name: "Re:Coded Student",
      age: 27,
      city: "London",
      image:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ihUlvkMnBc6A/v0/-1x-1.jpg",
    },
  };
};

export default AboutMe;
