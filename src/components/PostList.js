import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from 'redux/actions/postActions';

import PostItem from 'components/PostItem';

import * as styles from 'styles/postList.module.scss';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(store => store.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const mappedPosts = posts.map(post => <PostItem key={post.id} {...post} />);

  return (
    <>
      <ul className={styles.postList}>{mappedPosts}</ul>
    </>
  );
};

export default PostList;
