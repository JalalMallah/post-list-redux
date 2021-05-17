import React from 'react';

import * as styles from 'styles/postItem.module.scss';

const PostItem = ({ body, title }) => {
  return (
    <li className={styles.item}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>
    </li>
  );
};

export default PostItem;
