import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css"

class TodoList extends Component {

    state = {
        task: '',
    }

    onChangeText = (ev) => {
        this.setState({
            title: ev.target.value,
        })
    }

    submit = () => {
        const formData = {
            task: this.state.task,
        }

    fetch('/api/mongodb/TodoList/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Redirect to ???
        // this.props.history.push('/foo/');
      });
    }

    deleteArticle(documentId) {
        console.log('Sending DELETE for', documentId);
        // Do the DELETE, using "?_id=" to specify which document we are deleting
        fetch('/api/mongodb/TodoList/?_id=' + documentId, {
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
        <br />
        <button onClick={this.submit}>Add Task</button>
        </div>
    )
}
}

   

export default TodoList;