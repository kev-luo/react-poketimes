import React, { Component } from 'react'; 
import axios from 'axios';
import Rainbow from '../hoc/rainbow';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png'

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
            <img src={ Pokeball } alt="pokeball"/>
            <div className="card-content">
              <Link to={`/${post.id}`}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    )

    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postsList}
      </div>
    )
  }

}

export default Rainbow(Home);