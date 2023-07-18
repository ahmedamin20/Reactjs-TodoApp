import React, { useEffect } from 'react'
import { v4 as uuidv4 } from "uuid"
import "./form.css"
const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
    const updateTodo = (title, id, completed) => {
        const newTodo = [...(todos || [])].map((todo) => {
            if (todo.id === id) {
                return { title, id, completed };
            } else return todo
        })
        setTodos(newTodo)
        setEditTodo("")
    }
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title)
        } else {
            setInput("")
        }
    }, [setInput, editTodo])
    const handelInput = (e) => {
        setInput(e.target.value)
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
            setInput("")
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    }
    return (
        <form className='d-flex flex-column justify-content-center algin-content-center' onSubmit={handelSubmit}>
            <h1 className='w-50 mx-auto mt-3 text-center p-2' style={{ color: "white" }}>Todo App</h1>
            <div className='w-75 d-flex justify-content-evenly flex-row m-3 mx-auto'>
                <input className='w-75 p-2 border border-1 border-light rounded bg-transparent' type='text' placeholder='Enter a Task' value={input} onChange={handelInput} required />
                <button className='AddButton btn  mx-2  px-4' style={{ backgroundColor: "white" }} type='submit'>{editTodo ? "Save Edit" : "Add"}</button>
            </div>
        </form>
    )
}

export default Form
