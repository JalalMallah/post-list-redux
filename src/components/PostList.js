import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from 'redux/actions/postActions';

import PostItem from 'components/PostItem';

import * as styles from 'styles/postList.module.scss';

const PostList = ({ fetchPosts, posts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  const postItems = posts.map(post => <PostItem key={post.id} {...post} />);

  return (
    <>
      <ul className={styles.postList}>{postItems}</ul>
    </>
  );
};

const mapStateToProps = state => ({
  posts: state.posts.items,
});

export default connect(mapStateToProps, { fetchPosts })(PostList);

PostList.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
