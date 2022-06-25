import React from "react";
import "./todo.css"
import { useState } from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
    const [style, setStyle] = useState("Pending")
    const deleteHandler = () => {
        setTodos(todos.filter(ele => ele.id !== todo.id))
    }

    const completeHandler = () => {
       setStyle("Completed")
    }
    return (
        <div>
            <div className="todo">
                <div className={style}>
                <div className={"todo-item"}>
                    {text}
                </div>
                </div>
                <button onClick={completeHandler} className="complete-btn">
                    <i className="bi bi-patch-check"></i>
                </button>
                <button onClick={deleteHandler} className="delete-btn">
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default Todo;
