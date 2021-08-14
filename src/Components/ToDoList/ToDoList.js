import React from 'react';
import Todo from "../ToDoComp/Todo";
import styles from "./todoListStyle.module.css"
const ToDoList = ({todos, completeHandler}) => {
    if (todos.length === 0) {
        return <p className={styles.empty}>Add some tasks to ToDoList</p>
    }
    return (
        <div>
            {
                todos.map((todo) => {
                    return (
                        <Todo todo={todo} key={todo.id} completeHandler={() => completeHandler(todo.id)}/>
                    )
                })
            }
        </div>
    );
};

export default ToDoList;
