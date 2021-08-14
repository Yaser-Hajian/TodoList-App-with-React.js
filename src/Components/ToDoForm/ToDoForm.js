import React, {useState} from 'react';

const ToDoForm = ({addTodoHandler}) => {
    const [inputValue, setInputValue] = useState("");
    const changeHandler = (event) => {
        setInputValue(event.target.value);

    }
    const submitHandler = (event) => {
        event.preventDefault();
        if (!inputValue){
            alert("input todo description...");
            return
        }
        addTodoHandler(inputValue);
        setInputValue("");


    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input  type="text"  value={inputValue} onChange={changeHandler} />
                <button type={"submit"}>Add</button>
            </form>
        </div>
    );
};

export default ToDoForm;
