import React from "react";
import TodoList from "../components/ToDoList";
import Navbar from "../components/Navbar";
import HeadAndGlobalStyles from "../components/HeadAndGlobalStyles";
import Layout from "../components/Layout";
import { getAvailableTasks } from "../services/taskService";

const MyTodoList = (props) => {
  return (
    <>
      <HeadAndGlobalStyles />

      <Layout>
        <Navbar />

        <main>
          <h1>My To Do List</h1>

          {/*TODO: Can you change this hardcoded list to come from the props via the server?*/}
          <TodoList
            tasks={[
              {
                id: 1,
                label: "A Hardcoded Task",
              },
            ]}
          />
        </main>
      </Layout>
    </>
  );
};

// TODO: Use getAvailableTasks to return the list of all items we want to pre-fetch.
export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default MyTodoList;
