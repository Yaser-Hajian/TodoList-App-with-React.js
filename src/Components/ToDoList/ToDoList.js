import React, {useContext, useState} from 'react';
import Todo from "../ToDoComp/Todo";
import styles from "./todoListStyle.module.css"
import ToDoForm from "../ToDoForm/ToDoForm";
const ToDoList = ({todos, completeHandler ,deleteHandler ,editHandler}) => {
    const [edit , setEdit] = useState({});

    const editTodo =(newText , newDate)=>{
        editHandler(edit.id , newText , newDate);
        setEdit({})
    }
    const renderTodos =()=>{
        if (todos.length === 0) {
            return <p className={styles.empty}>Add some tasks to ToDoList</p>
        }
        return (
            <div className={styles.todoContainer}>
                {
                    todos.map((todo) => {
                        return (
                            <Todo todo={todo}
                                  key={todo.id}
                                  completeHandler={() => completeHandler(todo.id)}
                                  deleteHandler={() => deleteHandler(todo.id)}
                                  onEdit={()=>setEdit(todo)}
                            />
                        )
                    })
                }
            </div>
        );
    }

    return(
        <>
            {
                edit.text ? <ToDoForm submitHandler={editTodo} editedTodo={edit}/> : renderTodos()
            }
        </>
    );
};

export default ToDoList;
