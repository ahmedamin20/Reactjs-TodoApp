import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form/Form';
import TodoList from './components/todoForm/TodoList';
function App() {
  const [input, setInput] = useState()
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)
  return (
    <div className='app d-flex justify-content-center flex-column'>
      <div className="m-3 bg-dark w-50 d-flex justify-content-center flex-column  mx-auto rounded">
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
          editTodo={editTodo}
        />
        <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} className="mx-auto" />
        <h6 className='CR mx-auto overflow-hidden'>&copy; Copy Write Developer : AhmedAmin</h6>
      </div>
    </div>
  );
}

export default App;
