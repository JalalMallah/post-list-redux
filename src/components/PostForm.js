import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from 'redux/actions/postActions';

import * as styles from 'styles/postForm.module.scss';

const PostForm = () => {
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  function handleBodyChange(e) {
    setBody(e.target.value);
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log('submit form.');
    if (!body || !title) return;

    const post = {
      title,
      body,
    };

    dispatch(addPost(post));

    setBody('');
    setTitle('');
  }

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <h2>Add new post ✍️</h2>
      <div className={styles.formRow}>
        <label htmlFor='title'>Title:</label>
        <input type='text' id='title' name='title' value={title} onChange={handleTitleChange} />
      </div>
      <div className={styles.formRow}>
        <label htmlFor='body'>Body:</label>
        <textarea type='text' id='body' name='body' value={body} onChange={handleBodyChange} />
      </div>
      <button className={styles.submit}>Add post</button>
    </form>
  );
};

export default PostForm;
