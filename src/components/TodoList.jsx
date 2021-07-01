import React from "react"
import TodoItem from "../TodoItem"
import { useSelector, useDispatch } from "react-redux"


export default function TodoList() {

    const todos = useSelector((state) => state.todos)
    const filters = useSelector((state) => state.filters)
    const dispatch = useDispatch()

    let filteredTodos = todos.filter((todo) => {
        if(filters.activeOnly){
          if(filters.colors.length < 1){
            return todo.isCompleted === true
          }
          return todo.isCompleted === true && filters.colors.includes(todo.color)
        }else if(filters.colors.length > 0) {
          return filters.colors.includes(todo.color)
        }else {
          return todo
        }
      })

      let todoListUncompleted = filteredTodos.map((todo, ind) => {
        if(!todo.isCompleted){
            return <TodoItem todo={todo}  key={todo.id} />
        }
    })

      let todoListCompleted = filteredTodos.map((todo, ind) => {
          if(todo.isCompleted){
              return <TodoItem todo={todo}  key={todo.id} />
          }
      })

      

    return(
        <div className="todos" >
            <div className="todos-heading" >Remaining</div>
            <div className="uncompleted-todos">
                { todoListUncompleted }
            </div>
            <div className="todos-heading" >Finished</div>
            <div className="completed-todos">
                { todoListCompleted }
            </div>
        </div>
    )
}