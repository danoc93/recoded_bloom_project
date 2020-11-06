import React, { Component } from "react";
import TodoList from "../components/ToDoList";
import Navbar from "../components/Navbar";
import { getAvailableTasks } from "../services/taskService";
import styled from "styled-components";
import HeadAndGlobalStyles from "../components/HeadAndGlobalStyles";
import Layout from "../components/Layout";


const MyTodoList = (props) => {
  return (
    <>
      <HeadAndGlobalStyles />
      
      <Layout>
        <Navbar />
        
        <main>
          <h1>My To Do List</h1>

          <TodoList tasks={props.tasks} />
        </main>
      </Layout>
    </>
  );
}

export const getServerSideProps = async (query, res, req) => {
  return {
    props: {
      tasks: getAvailableTasks(),
    },
  };
};

export default MyTodoList;
