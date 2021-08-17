import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from "./todoFormStyle.module.css"

const ToDoForm = ({submitHandler, editedTodo}) => {
    const [inputValue, setInputValue] = useState("");
    const [inputDate, setInputDate] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
        if (editedTodo) {
            setInputValue(editedTodo.text);
            setInputDate(editedTodo.date);
        }
    }, [])
    const changeHandler = (event) => {
        setInputValue(event.target.value);
    }
    const changeDateHandler = (event) => {
        setInputDate(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (!inputValue) {
            alert("input todo description...");
            return
        }
        submitHandler(inputValue , inputDate);
        setInputValue("");
        setInputDate("")
    }

    return (
        <div>
            <form onSubmit={onSubmit} className={styles.form}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={changeHandler}
                    placeholder={editedTodo ? "Edited todo text" : "New Todo text (Required)"}
                    ref={inputRef}
                />
                <input
                    type="date"
                    onChange={changeDateHandler}
                    value={inputDate}

                />
                <button type={"submit"} className={styles.btn} >{editedTodo ? "Update" : "Add"}</button>
            </form>
        </div>
    );
};

export default ToDoForm;
