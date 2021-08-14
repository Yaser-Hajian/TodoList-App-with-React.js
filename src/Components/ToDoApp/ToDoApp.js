import React, {useState} from 'react';
import styles from "./todoStyle.module.css"
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";
const ToDoApp = () => {
    const [todos , setTodos] = useState([]);
    return (
        <div className={styles.container}>
            <ToDoForm />
            <ToDoList />
        </div>
    );
};

export default ToDoApp;
