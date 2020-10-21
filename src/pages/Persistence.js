import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DataBase from '../data/db';

export const Persistance = () => {

    const [todos, setToDo] = useState([]);
    DataBase.todos.toArray().then(results => {
        setToDo(results)
    });
    return <div className='container-fluid'>
        <h1>Persistent data</h1>
        <>{JSON.stringify(todos)}</><br />
        <Link className='btn btn-primary' to="/todo">Retour vers la liste des choses à faire</Link>
    </div>;
}
