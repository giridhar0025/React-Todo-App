import React from "react";
import './form.css'

const Form = ({ setInputText, inputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }
  const submitHandler = (e) => {
    setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
    setInputText("");
  }
  return (
    <div id="main">
      <label id="todotask" for="todotask">ToDo:</label>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"></input>

      <button onClick={submitHandler} className="todo-button" type="button" class="btn btn-outline-primary">
        <span className="bi bi-plus-circle"></span>
      </button>

      {/* <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div> */}
    </div>
  );
};

export default Form;
