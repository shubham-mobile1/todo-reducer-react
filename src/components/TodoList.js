import React, { useContext } from 'react';
import '../App.css';
import { REMOVE_TODO } from '../context/actions.types';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
    const {todos,dispatch} = useContext(TodoContext);
    
    return (
        <div>
            <ul className="todoList">
               {
                   todos.map((e) => 
                    <li className="todoListItem">
                        <span>{e.text}</span>
                        <span onClick={()=> dispatch({type: REMOVE_TODO, payload: e.id})}>X</span>
                    </li>
                    )
               }
            </ul>
        </div>
    );
};

export default TodoList;