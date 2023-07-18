import React from 'react'
import "./todo.css"
const TodoList = ({ todos, setTodos, setEditTodo }) => {
    const handelDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const handelComplete = (todo) => {
        setTodos([...todos || []].map((item) => {
            if (item.id === todo.id) {
                return { ...item, completed: !item.completed }
            }
            return item
        }))
    }
    const handelEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id)
        setEditTodo(findTodo);
    }

    return (
        <div className='w-75 mx-auto'>
            {[...(todos || [])].map((todo) => (
                <li key={todo.id} className='li-none w-100 d-flex justify-content-evenly flex-row m-3 mx-auto'>
                    <input type='text' value={todo.title}
                        onChange={(e) => e.preventDefault()}
                        className='w-75 p-2 border border-1 border-light rounded bg-transparent'

                    />
                    <div className='btns-container d-flex flex-row justify-content-between'>
                        <button className="btn btn-success p-0" onClick={() => handelComplete(todo)}>
                            <i className="fa fa-check-circle mx-auto"></i>
                        </button>
                        <button className="btn btn-warning p-0" onClick={() => handelEdit(todo)}>
                            <i className="fa fa-edit mx-auto"></i>
                        </button>
                        <button className="btn btn-danger p-0" onClick={() => handelDelete(todo)}>
                            <i className="fa fa-trash mx-auto"></i>
                        </button>
                    </div>
                </li>
            ))
            }
        </div>
    )
}

export default TodoList
