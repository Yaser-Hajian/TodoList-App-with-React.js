import React, {useEffect, useState} from 'react';
import styles from "./todoAppStyle.module.css"
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";
import NavBar from "../NavBar/NavBar";

const ToDoApp = () => {
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [filterMethod, setFilterMethod] = useState("");
    useEffect(()=>{
        filterHandler(filterMethod);
    },[todos , filterMethod])
    const addTodoHandler = (todoText) => {
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            text: todoText,
            isCompleted: false,
        }
        const currentTodos = [...todos];
        currentTodos.unshift(newTodo);
        setTodos(currentTodos);

    }
    const completeHandler = (id) => {
        const copy_todos_list = [...todos];
        const index = todos.findIndex(todo => todo.id === id);
        const copy_todo = {...todos[index]};
        copy_todo.isCompleted = !copy_todo.isCompleted;
        copy_todos_list[index] = copy_todo;
        setTodos(copy_todos_list);
    }
    const editHandler = (id , newText) => {
        const copy_todos_list = [...todos];
        const index = todos.findIndex(todo => todo.id === id);
        const copy_todo = {...todos[index]};
        copy_todo.text = newText;
        copy_todos_list[index] = copy_todo;
        setTodos(copy_todos_list);

    }
    const deleteHandler = (id) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
    }

    const filterHandler = (selectedOption)=>{
        if (selectedOption.value === "Completed"){
            setFilteredTodos(todos.filter(todo => todo.isCompleted));
        }else if (selectedOption.value === "Uncompleted"){
            setFilteredTodos(todos.filter(todo => !todo.isCompleted));
        }else {
            setFilteredTodos(todos);
        }
    }
    return (
        <div className={styles.container}>
            <NavBar
                uncompleteTodo={todos.filter(todo => !todo.isCompleted).length}
                filterHandler={filterHandler}
                setFilterMethod={setFilterMethod}
            />
            <ToDoForm submitHandler={addTodoHandler}/>
            <ToDoList
                todos={filteredTodos}
                completeHandler={completeHandler}
                deleteHandler={deleteHandler}
                editHandler={editHandler}
            />
        </div>
    );
};

export default ToDoApp;
