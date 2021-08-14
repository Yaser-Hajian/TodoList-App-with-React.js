import React, {useState} from 'react';

const ToDoForm = () => {
    const [todo, setTodo] = useState("");
    const changeHandler = (event) => {
        setTodo(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={todo} onChange={changeHandler}/>
                <button type={"submit"}>Add</button>
            </form>
        </div>
    );
};

export default ToDoForm;
