import React, { Component } from 'react'; 
import axios from 'axios';
import Rainbow from '../hoc/rainbow';


class Home extends Component {
  state = {
    posts: []
  }

  async componentDidMount() {
    let res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    
    this.setState({
      posts: res.data.slice(0,10)
    })
  }

  render () {
    const { posts } = this.state;

    const postsListLength = posts.length;

    const postsList = (postsListLength) ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span classNamem="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    )

    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postsList}
      </div>
    )
  }

}

export default Rainbow(Home);