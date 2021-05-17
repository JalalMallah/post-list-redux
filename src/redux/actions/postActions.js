import { ADD_POST, FETCH_POSTS } from './types';

export const fetchPosts = () => dispatch => {
  console.log('fetch posts');
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      })
    )
    .catch(error => console.error('Error:', error));
};
