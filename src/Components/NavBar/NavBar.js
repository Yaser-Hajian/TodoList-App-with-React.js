import React, {useState} from 'react';
import styles from './NavBarStyle.module.css'
import Select from "react-select";

const NavBar = (props) => {
    const options = [
        {value: '', label: 'All'},
        {value: 'Completed', label: 'Completed'},
        {value: 'Uncompleted', label: 'Uncompleted'},
    ];
    const onFilter = (selectedOption) => {
        props.setFilterMethod(selectedOption);
        props.filterHandler(selectedOption);
    }
    if (!props.uncompleteTodo) {
        return <h2>Set your todos!</h2>
    }
    return (
        <div>
            <div>
                {
                    (props.uncompleteTodo > 1 ?
                       <h2> {props.uncompleteTodo} todos are UnCompleted!</h2>
                          :
                       <h2> {props.uncompleteTodo} todo is UnCompleted!</h2>
                    )
                }
            </div>
            <div className={styles.selectContainer}>
                <p>Filter By :</p>
                <Select
                    className={styles.select}
                    onChange={onFilter}
                    options={options}
                />
            </div>
        </div>
    );
};

export default NavBar;
