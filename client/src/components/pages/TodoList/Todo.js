import React from "react"
  import TodoList from "./TodoList"
  import TodoItems from "./TodoItems"


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