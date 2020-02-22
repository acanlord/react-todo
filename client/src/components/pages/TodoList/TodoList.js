import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css"

class TodoList extends Component {

    state = {
        taskId: '',
    }

    onChangeText = (ev) => {
        this.setState({
            title: ev.target.value,
        })
    }

    submit = () => {
        const formData = {
            taskId: this.state.taskId,
        }

    fetch('/api/mongodb/TodoList/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);
        this.setState({
            task: data,
        });

        // Redirect to ???
        // this.props.history.push('/foo/');
      });
    }

    deleteTask(taskId) {
        console.log('Sending DELETE for', taskId);
        // Do the DELETE, using "?_id=" to specify which document we are deleting
        fetch('/api/mongodb/TodoList/?_id=' + taskId, {
            method: 'DELETE',
          })
          .then(response => response.json())
          .then(data => {
            console.log('Got this back', data);
    
            // Call method to refresh data
            this.fetchPosts();
          });
      }


render() {
    return(
        <div className="EnterTask">
        <h1>Enter Task</h1>
        <input
        name="title"
        placeholder="Title"
        value={this.state.title}
        onChange={this.onChangeTitle}
        />
        {
        this.state.TodoList.map((task, index) => (
            <div ClassName="Todo-List" key={task._id}>
            <h1>{task.title}</h1>
            <p>{task.text}</p>
            <div className="TodoList">
                <div onClick={() => this.deleteTask(task._id)}>
                  <span alt="delete this">🗑</span>
                </div>
            </div>
            </div>
            )
        )}
        <br />
        <button onClick={this.submit}>Add Task</button>
        </div>

    )
}
}

   

export default TodoList;