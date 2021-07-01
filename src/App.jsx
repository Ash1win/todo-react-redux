import React, { useState } from 'react'
import AddTodo from "./components/AddTodo"
import Filters from "./components/Filters"
import TodoList from "./components/TodoList"
import downIcon from "./icons/downIcon.png"
import './App.css'

function App() {
  const [hideFilters, setHideFilters] = useState(true)

  const handleHideFilters = () => {
    setHideFilters(!hideFilters)
  }

  return (
    <div className="main-container">
      <div className="title">Todo<b>list</b></div>
      <AddTodo />
      <Filters hideFilters={hideFilters} />
      <div  className="filter-heading" >
        <div>Filters</div>
        <img src={downIcon} onClick={handleHideFilters} className={ hideFilters ? null : "rotate" } />
      </div>
      <TodoList />
    </div>
  )
}

export default App
