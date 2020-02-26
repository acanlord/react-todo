import React from "react"
  import TodoList from "./TodoList"
  import TodoItems from "./TodoItems"


  function TodoView() {
      return (
          <div>
              {/* <h1>Todo list</h1> */}
              <TodoItems />
              <TodoList />
          </div>
      )
  }

export default TodoView