import React from "react"
import { updateTodoState, updateTodoColor } from "./slices/todoSlice"
import { useDispatch } from "react-redux"



export default function TodoItem(props) {

    const dispatch = useDispatch()

    const handleCheckboxInput = () => {
        dispatch(updateTodoState(props.todo.id))
    }

    const handleColorChange = (e) => {
        dispatch(updateTodoColor({
            id: props.todo.id,
            color: e.target.value
        }))
    }

    return (
            <div>
                <div className="todo-data" >
                    <input type="checkbox" checked={props.todo.isCompleted}  onChange={ handleCheckboxInput } /> 
                    {props.todo.data}
                </div>
                <select value={props.todo.color}  onChange={ handleColorChange } >
                    <option value="red">red</option>
                    <option value="yellow">yellow</option>
                    <option value="purple">purple</option>
                </select>
            </div>
    )
}