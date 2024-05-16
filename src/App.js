
import './App.css';
import React, {useState} from 'react';

import { TodoTable } from './components/TodoTable';

function App() {
  const [todos, setTodos] = useState( [
    {
      rowNumber:1, rowDescription: 'Feed puppy', rowAssigned: 'user one'
    }, 
    {
      rowNumber:2, rowDescription: 'Get hair done', rowAssigned: 'user two'
    },
    {
      rowNumber:3, rowDescription: 'Get book', rowAssigned: 'user two'
    },
    {
      rowNumber:4, rowDescription: 'Brush hair', rowAssigned: 'user two'
    },
  ])

  const addTodo = () => {
    if(todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: 'New Todo',
        rowAssigned: 'User Three'

      };
      
      setTodos(todos=> [...todos, newTodo]);


    }
  }

  return (
    <div className='mt-5 container'>
      
      <div className='card'>
        <div className='card-header'>
          <h4>React To Do</h4>
        </div>
      <div className='card-body'>
        <TodoTable todos={todos}/>
        <button className='btn btn-primary' onClick={addTodo}> Add new TODO</button>
      </div>

      </div>
    </div>
  );
}

export default App;
