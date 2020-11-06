import React  from "react";
import TodoList from "../components/ToDoList";
import Navbar from "../components/Navbar";
import HeadAndGlobalStyles from "../components/HeadAndGlobalStyles";
import Layout from "../components/Layout";
import {getAvailableTasks} from '../services/taskService';

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

// TODO: Use getAvailableTasks to return the list of all items we want to pre-fetch.
export const getServerSideProps = async () => {
  return {
    props: {

    }
  }
};

export default MyTodoList;
