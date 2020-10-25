const initState = {
  posts: [
    {id: 1, title: 'hello', body: 'first post waddup'},
    {id: 2, title: 'pokemon are the best', body: 'what the title said'}
  ]
}

const rootReducer = (state = initState, action) => {
  console.log(action); // when the deletePost fxn returns the dispatch fxn (which carries the type of action and an optional payload) from pokeThought, this rootReducer receives the action and logs it to the console
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return post.id !== action.id
    });
    return {
      ...state,
      posts: newPosts
    }
  }
  return state;
}

export default rootReducer;

// this is the redux store