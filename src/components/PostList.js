import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from 'redux/actions/postActions';

import PostItem from 'components/PostItem';

import * as styles from 'styles/postList.module.scss';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(store => store.posts.items);
  const newPost = useSelector(store => store.posts.item);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  useEffect(() => {
    posts.unshift(newPost);
  });

  const postItems = posts.map(post => <PostItem key={post.id} {...post} />);

  return (
    <>
      <ul className={styles.postList}>{postItems}</ul>
    </>
  );
};

PostList.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  newPost: PropTypes.object.isRequired,
};

export default PostList;
