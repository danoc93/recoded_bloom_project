import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
const TodoListWrapper = styled.ul`
  font-size: 1.25em;
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
`;

const AddTodo = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');
  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };
  const handleClick = () => {};

  return (
    <>
      <input type="text" />
      <button onClick={handleClick}>Add Item</button>
    </>
  );
};

const TodoList = () => {
  const todos = [
    {
      id: 1,
      label: 'sample'
    },
    {
      id: 2,
      label: 'sample 2'
    },
  ];
  const CheckboxWrapper = styled.label`
    display: inline-block;
    padding: 0.25em 0;

    input {
      width: 1em;
      height: 1em;
      margin-right: 0.5em;
    }
  `;

  return (
    <>
    {todos && todos.length > 0 && (
      <TodoListWrapper>
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              <CheckboxWrapper>
                <input type="checkbox" />
                <span>{todo.label}</span>
              </CheckboxWrapper>
            </ListItem>
          ))}
        </TodoListWrapper>
    )}
    {(!todos || !todos.length) && (<p>No Items Remaining</p>)}
    <AddTodo />
    </>
  )
};

export default TodoList;
