import React, {useState} from 'react';
import styles from "./todoStyle.module.css"
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";

const ToDoApp = () => {
    const [todos, setTodos] = useState([]);

    const addTodoHandler = (todo) => {
        const newTodo = {
            id : Math.floor(Math.random() *1000),
            text : todo,
            inCompleted : false,
        }
        const currentTodos = [...todos];
        currentTodos.unshift(newTodo);
        setTodos(currentTodos);
    }
    return (
        <div className={styles.container}>
            <ToDoForm addTodoHandler={addTodoHandler}/>
            <ToDoList/>
        </div>
    );
};

export default ToDoApp;
