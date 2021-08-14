import React from 'react';
import styles from "./todoStyle.module.css"
const Todo = ({todo , completeHandler}) => {
    return (
        <div className={styles.todo}>
            <div>{todo.text}</div>
            <div>
                <button >Edit</button>
                {
                    todo.isCompleted ?
                        <button onClick={completeHandler} className={styles.uncompleted}>UnComplete</button>
                        :
                        <button onClick={completeHandler} className={styles.completed}>Complete</button>

                }
            </div>
        </div>
    );
};

export default Todo;
