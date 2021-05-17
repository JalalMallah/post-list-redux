import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from 'redux/actions/postActions';

import * as styles from 'styles/postForm.module.scss';

const PostForm = ({ addPost }) => {
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');

  function handleBodyChange(e) {
    setBody(e.target.value);
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!body || !title) return;

    const post = {
      title,
      body,
    };

    addPost(post);

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

export default connect(null, { addPost })(PostForm);

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};
