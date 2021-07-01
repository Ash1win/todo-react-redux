import React, { useState } from "react"
import { addTodo } from "../slices/todoSlice"
import { useSelector, useDispatch } from "react-redux"

export default function AddTodo(){

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    const [text, setText] = useState("")

    const handleInputChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = () => {
        const todo = {
            id: todos.length+1,
            data: text,
            color: "red",
            isCompleted: false
        }
        dispatch(addTodo(todo))
        setText("")
    }

    return(
        <div className="addtodo-container">
            <input type="text" placeholder="add todo here"  value={text} onChange={handleInputChange} />
            <button onClick={handleSubmit} >add</button>
        </div>
    )
}