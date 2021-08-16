import React from 'react';
import styles from "./todoStyle.module.css"

const Todo = ({todo, completeHandler , deleteHandler}) => {
    return (
        <div className={styles.todo}>
            <div  className={todo.isCompleted && styles.completeText}>{todo.text}</div>
            <div>
                {
                    todo.isCompleted ?
                        <button onClick={completeHandler} className={styles.uncompletedBtn}>UnComplete</button>
                        :
                        <button onClick={completeHandler} className={styles.completedBtn}>Complete</button>

                }
                <button>Edit</button>
                <button onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    );
};

export default Todo;
