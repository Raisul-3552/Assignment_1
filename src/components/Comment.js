import React, { useState } from 'react';
import Reactions from './Reactions';
import styles from '../css/Home.module.css';

function Comment() {
  const [commentReaction, setCommentReaction] = useState('');

  return (
    <div className={styles.commentBox}>
      <p><strong>Author Name, 10 February 2025</strong></p>
      <p>This is a sample comment.</p>
      <Reactions selected={commentReaction} onSelect={setCommentReaction} />
    </div>
  );
}

export default Comment;
