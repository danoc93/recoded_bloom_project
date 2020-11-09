import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import store from './configureStore'
import TodoList from './TodoList'
import styled from "styled-components";

const MyApplication = () => {
  const Subtitle = styled.h2`
    font-style: ${(props) => (props.emphasis ? "italic" : "normal")};
  `;

  return (
    <Provider store={store}>
      <h1>My To-do List</h1>
      <Subtitle>Re:Coded</Subtitle>
      <Subtitle emphasis>Nov 09 – Nov 13</Subtitle>

      <TodoList />
    </Provider>
  )
};

ReactDOM.render(<MyApplication />, document.getElementById("root"));
