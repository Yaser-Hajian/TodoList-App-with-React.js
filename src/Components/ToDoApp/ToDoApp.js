import React, {useState} from 'react';
import styles from "./todoAppStyle.module.css"
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";

const ToDoApp = () => {
    const [todos, setTodos] = useState([]);

    const addTodoHandler = (todo) => {
        const newTodo = {
            id : Math.floor(Math.random() *1000),
            text : todo,
            isCompleted : false,
        }
        const currentTodos = [...todos];
        currentTodos.unshift(newTodo);
        setTodos(currentTodos);
    }
    const completeHandler = (id) =>{
        const copy_todos_list = [...todos];
        const index = todos.findIndex(todo => todo.id === id);
        const copy_todo = {...todos[index]};
        copy_todo.isCompleted = !copy_todo.isCompleted;
        copy_todos_list[index] = copy_todo;
        setTodos(copy_todos_list);
    }
    const editHandler = (id)=>{

    }
    return (
        <div className={styles.container}>
            <ToDoForm addTodoHandler={addTodoHandler}/>
            <ToDoList todos={todos} completeHandler={completeHandler}/>
        </div>
    );
};

export default ToDoApp;
