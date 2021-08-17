import React, {useEffect, useState} from 'react';
import styles from "./todoStyle.module.css"

const Todo = ({todo, completeHandler , deleteHandler , onEdit}) => {
    const [isLate , setIsLate] = useState(false);
    useEffect(()=>{
        const now = new Date();
        const todo_date = new Date(todo.date);
         if (todo_date < now){
            setIsLate(true);
        }else {
            setIsLate(false);
        }
    },[todo])
    return (
        <div className={isLate? (todo.isCompleted? (styles.todo): (styles.lateTodo)) : styles.todo}>
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
