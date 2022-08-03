import React, {useReducer} from 'react';
import { TodoContext } from './context/TodoContext';
import todoReducer from './context/reducer';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{todos, dispatch}}>
      <div className='body'>
        <h1 className='heading'>TODO</h1>
        <TodoList />
        <AddTodo />
      </div>
    </TodoContext.Provider>
  );
}

export default App;