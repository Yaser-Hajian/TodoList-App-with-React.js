import React, {useEffect, useRef, useState} from 'react';
import styles from "./todoFormStyle.module.css"

const ToDoForm = ({submitHandler, editedTodo}) => {
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
        if (editedTodo) {
            setInputValue(editedTodo.text);
        }
    }, [])
    const changeHandler = (event) => {
        setInputValue(event.target.value);

    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (!inputValue) {
            alert("input todo description...");
            return
        }
        submitHandler(inputValue);
        setInputValue("");


    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={changeHandler}
                    placeholder={editedTodo ? "Edited todo text" : "New Todo text"}
                    ref={inputRef}

                />
                <button type={"submit"}>{editedTodo ? "Update" : "Add"}</button>
            </form>
        </div>
    );
};

export default ToDoForm;
