import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const ToDo = () => {
    const [todoList, updateToDoList] = useState([]);
    const addTodo = () => {
        const tabCopy = [...todoList];
        tabCopy.push(1);
        updateToDoList(tabCopy);
    }
    return <>
        <Link to='/'>Retour vers la home</Link>
        <h1>liste des todos</h1>
        <>liste des todos {todoList.length} {JSON.stringify(todoList)} </>
        <br />
        <button onClick={addTodo}>add</button>
    </>
};