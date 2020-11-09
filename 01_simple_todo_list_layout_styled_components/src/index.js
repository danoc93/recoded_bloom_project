import React from "react";
import ReactDOM from "react-dom";

const MyApplication = () => (
  <>
    <h1>My To-do List</h1>
    <h2>Re:Coded</h2>
    <h2 className="emphasis">Nov 09 – Nov 13</h2>

    <ul>
      <li>
        <label>
          <input type="checkbox" />
          <span>Task 1</span>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <span>Task 2</span>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <span>Task 3</span>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <span>Task 4</span>
        </label>
      </li>
    </ul>
  </>
);

ReactDOM.render(<MyApplication />, document.getElementById("root"));
