import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Reactions from './Reactions';
import Comment from './Comment';
import styles from '../css/Home.module.css';

function Post() {
  const [selectedReaction, setSelectedReaction] = useState('');

  return (
    <div className={styles.postContainer}>
      <h2>Post Title: Lorem Ipsum</h2>
      <div className={styles.imageBox}></div>
      <div className={styles.authorInfo}>
        <Link to="/author">Author Name</Link>
        <p>7 January 2025</p>
      </div>
      <p className={styles.postBody}>
        This is the post content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <Reactions selected={selectedReaction} onSelect={setSelectedReaction} />

      <h4 style={{ marginTop: '2rem' }}>Comments</h4>
      <Comment />
      <Comment />
    </div>
  );
}

export default Post;
