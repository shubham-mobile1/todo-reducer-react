import React, { useContext, useState } from 'react';
import { v4 } from 'uuid';
import '../App.css';
import { ADD_TODO } from '../context/actions.types';
import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {
    const [todoText, setTodoText] = useState('');
    const {dispatch} = useContext(TodoContext);

    const addTodo = (event) => {
        event.preventDefault();
        if(todoText === '' || todoText === undefined){
           return alert('Please enter some text');
        }
        const newTodo = {
            id: v4(),
            text: todoText,
        }
        dispatch({type: ADD_TODO, payload: newTodo});
        setTodoText('');
    };

    return (
        <form onSubmit={addTodo}>
            <input value={todoText} onChange={(e) => setTodoText(e.target.value)}  className='field' type={ 'text' } placeholder="Enter your todo" required />
            <input className='submitButton' type={ 'submit' } value="Add Todo" />
        </form>
    );
};

export default AddTodo;