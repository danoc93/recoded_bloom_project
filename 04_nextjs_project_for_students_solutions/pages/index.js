import React, { Component } from "react";
import TodoList from "../components/ToDoList";
import Navbar from "../components/Navbar";
import { getAvailableTasks } from "../services/taskService";
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

export const getServerSideProps = async () => {
  return {
    props: {
      tasks: getAvailableTasks(),
    },
  };
};

export default MyTodoList;
