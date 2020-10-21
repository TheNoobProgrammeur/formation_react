import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const ToDo = () => {
    const [todoList, updateToDoList] = useState([]);
    const [currentTodoDescription, updateCurrentTodoDescription] = useState('');
    const addTodo = () => {
        const tabCopy = [...todoList];

        const newToDo = {
            created: Date.now(),
            done: false,
            desc: currentTodoDescription
        };

        tabCopy.push(newToDo);
        updateToDoList(tabCopy);
    }

    const onTextInputChange = (element) =>{
        updateCurrentTodoDescription(element.target.value);
    }



    const onToDoChange = (domElement, toDo) => {
        const indexOfTodo = todoList.indexOf(toDo);
        const tabCopy = [...todoList];
        tabCopy[indexOfTodo].done = domElement.target.checked;
        updateToDoList(tabCopy);
      };

    return <>
        <Link to='/'>Retour vers la home</Link>
        <h1>liste des todos</h1>
        
         
         <ul className="list-group">
            {todoList.map((todo, index) => (
                <li key={index} className="list-group-item">
                    <input
                        onChange={(element) => onToDoChange(element, todo)}
              className="form-check-input mr-1"
              type="checkbox"
              value={todo.done}
            />
            {todo.desc}
          </li>
        ))}
      </ul>


        <br />


        <input onChange={onTextInputChange} placeholder={"indiquez la description de votre tâche"} type="text"/><br />
        <button onClick={addTodo}>add</button>
    </>
};

/**
 * <> {JSON.stringify(todoList)} </>
 */