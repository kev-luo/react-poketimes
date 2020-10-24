import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  state = {
    post: null
  }

  async componentDidMount() {
    console.log(this.props);
    let id = this.props.match.params.post_id
    let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

    this.setState({
      post:res.data
    })
    console.log(this.state);
  }

  render() {
    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    )

    return (
      <div className="container">
        <h4>{post}</h4>
      </div>
    )
  }
}

export default Post;