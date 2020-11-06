import React  from "react";
import TodoList from "../components/ToDoList";
import Navbar from "../components/Navbar";
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

// TODO: Use getAvailableTasks to return the list of all items we want to pre-render.
export const getServerSideProps = async () => {
};

export default MyTodoList;
