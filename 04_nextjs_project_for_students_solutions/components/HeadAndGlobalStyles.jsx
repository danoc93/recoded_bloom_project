import Head from "next/head";
import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  :root {
    --main-color: hsl(220, 82%, 18%);
    --bg-color: hsl(220, 58%, 97%);

    --fs-base: 1.25rem;

    --br: 5px;

    --constraint-mw: 700px;

    --transition-default: all 0.3s ease-in-out;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Source Serif Pro';
    font-size: var(--fs-base);
    font-weight: normal;
    line-height: 1.25;

    background: var(--bg-color);
    color: var(--main-color);
  }

  h1 {
    font-style: italic;
  }

  ul {
    padding: 0;
  }

  a {
    color: var(--main-color);
    font-weight: bold;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      color: var(--main-color);
    }

    &:hover {
      text-decoration: underline;
    }

    &:focus {
      outline-color: currentColor
    }
  }
`;

const HeadAndGlobalStyles = () => {
  return (
    <>
      <Head>
        <title>Welcome to My To Do List</title>

        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
      </Head>

      <Normalize />
      <GlobalStyles />
    </>
  );
}

export default HeadAndGlobalStyles;
