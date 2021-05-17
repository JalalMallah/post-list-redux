import React, { useEffect, useState } from 'react';

import PostItem from 'components/PostItem';

import * as styles from 'styles/postList.module.scss';

const url = 'https://jsonplaceholder.typicode.com/posts';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const res = await fetch(url);
    const data = await res.json();
    setPosts(data);
  }

  const postItems = posts.map(post => <PostItem key={post.id} {...post} />);

  return (
    <>
      <ul className={styles.postList}>{postItems}</ul>
    </>
  );
};

export default PostList;
