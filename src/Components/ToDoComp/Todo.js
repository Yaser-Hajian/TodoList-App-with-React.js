import React from 'react';
import styles from "./todoStyle.module.css"

const Todo = ({todo, completeHandler , deleteHandler , onEdit}) => {
    return (
        <div className={styles.todo}>
            <div  className={todo.isCompleted ? styles.completeText : styles.todoText}>{todo.text}</div>
            {
                todo.date === ""?
                    <div className={styles.date}>Date: no-date</div>
                    :
                    <div className={styles.date}>Date: {todo.date}</div>
            }
            <div className={styles.todoOptions}>
                {
                    todo.isCompleted ?
                        <button onClick={completeHandler} className={styles.uncompletedBtn}>UnComplete</button>
                        :
                        <button onClick={completeHandler} className={styles.completedBtn}>Complete</button>

                }
                <button onClick={onEdit} className={styles.editBtn}>Edit</button>
                <button onClick={deleteHandler} className={styles.deleteBtn}>Delete</button>
            </div>
        </div>
    );
};

export default Todo;
