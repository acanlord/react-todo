import React, { Component } from 'react';


class TodoList extends Component {
  state = {
    blogPosts: [],
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    console.log('Fetching data from API');
    fetch('/api/mongodb/todo/')
      .then(response => response.json())
      .then(data => {
        console.log('Got data back, Fetch', data);
        this.setState({
          blogPosts: data,
        });
      });
  }

  deleteTask(taskId) {
    console.log('Sending DELETE for', taskId);
    // Do the DELETE, using "?_id=" to specify which document we are deleting
    fetch('/api/mongodb/todo/?_id=' + taskId, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Call method to refresh data
        this.fetchPosts();
      });
  }

  voteArticle(article) {
    let newVoteCount = article.voteCount;

    // Increase the vote count 
    if (!newVoteCount) {
      newVoteCount = 1;
    } else {
      newVoteCount++;
    }

    const formData = {
      voteCount: newVoteCount,
    };

    // Do the PUT, using "?_id=" to specify which document we are affecting
    const taskId = article._id;
    fetch('/api/mongodb/todo/?_id=' + taskId, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back, Put', data);

        // Call method to refresh data
        this.fetchPosts();
      });
  }

  render() {
    return (
      <div className="Todo">
        <h1>Blog</h1>
        {
          this.state.blogPosts.map((post, index) => (
            <div className="Todo-Items" key={post._id}>

              <h1>{post.title}</h1>
              <p>{post.text}</p>

              <div className="Todo-Actions">
                <div onClick={() => this.deleteTask(post._id)}>
                  <span alt="delete this">🗑</span>
                </div>
                {/* <div onClick={() => this.voteArticle(post)}>
                  <span alt="upvote this">⬆ {post.voteCount}</span>
                </div> */}
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default TodoList;

