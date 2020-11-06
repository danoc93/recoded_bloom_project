import React from "react";
import styled from "styled-components";

const TaskList = styled.ul`
  list-style: none;

  li {
  }
`

const InputLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 0.5em;
  border-radius: var(--br);
  border: 2px solid transparent;

  &:hover {
    border: 2px solid var(--main-color);
  }
  
  input {
    flex-shrink: 0;
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
  }

  span {
    margin-top: 0.2em;
  }
`

const TodoList = ({ tasks }) => {
  const [checkedTasks, setCheckedTasks] = React.useState({});

  if (!tasks) {
    return;
  }

  // Fetch the actual selection states from the API.
  // Because of the second parameter, this effect will only be performed once.
  React.useEffect(() => {
    const fetcher = async () => {
      const response = await await (
        await fetch("/api/get_selected_tasks")
      ).json();
      const initialTasks = {};
      for (const task of response.checkedTasks) {
        initialTasks[task] = true;
      }
      setCheckedTasks(initialTasks);
    };
    fetcher();
  }, []);

  const handleTaskChange = (event) => {
    setCheckedTasks({
      ...currentTasks,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <TaskList>
        {tasks.map((task) => (
          <li key={task.id}>
          <InputLabel>
            <input
              type="checkbox"
              checked={checkedTasks[task.id] || false}
              onChange={handleTaskChange}
            />

            <span>{task.label}</span>
          </InputLabel>

          </li>
        ))}
      </TaskList>
    </>
  );
};

export default TodoList;
