import React from "react"
  import TodoItems from "./TodoItems"
  import TodoList from "./TodoList"


  function Todo() {
      return (
          <div>
              <h1>Get sh*t done today!</h1>
              <TodoItems />
              <TodoList />
          </div>
      )
  }

export default Todo