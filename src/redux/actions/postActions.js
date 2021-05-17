import { ADD_POST, FETCH_POSTS } from './types';

export const fetchPosts = () => dispatch => {
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

export const addPost = postData => dispatch => {
  console.log('add post');
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })
    .then(res => res.json())
    .then(post => {
      console.log(post);
      dispatch({
        type: ADD_POST,
        payload: post,
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
};
