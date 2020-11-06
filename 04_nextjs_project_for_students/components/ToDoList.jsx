import React from "react";
import styled from "styled-components";

const TaskList = styled.ul`
  list-style: none;
`;

// TODO: Use styled-components to output a styled label as per the requirements.
// const InputLabel = ???

const TodoList = ({ tasks }) => {
  const [checkedTasks, setCheckedTasks] = React.useState({});

  if (!tasks || tasks.length === 0) {
    return <p>Your list is empty :(</p>;
  }

  // Fetch the actual selection states from the API.
  // Because of the second parameter, this effect will only be performed once.
  React.useEffect(() => {
    //TODO: Write some code to fetch the list of selected items and update checkedTasks.
  }, []);

  const handleTaskChange = (event) => {
    setCheckedTasks({
      ...checkedTasks,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <TaskList>
        {tasks.map((task) => (
          <li key={task.id}>
          <label>
            <input
              type="checkbox"
              name={task.id}
              checked={checkedTasks[task.id] ?? false}
              onChange={handleTaskChange}
            />

            <span>{task.label}</span>
          </label>

          </li>
        ))}
      </TaskList>
    </>
  );
};

export default TodoList;
