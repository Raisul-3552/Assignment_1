import React from 'react';
import styles from '../css/Home.module.css';

function Reactions({ selected, onSelect }) {
  const allReactions = ['like', 'love', 'angry', 'sad'];

  return (
    <div className={styles.reactionContainer}>
      {allReactions.map((r) => (
        <button
          key={r}
          onClick={() => onSelect(r)}
          className={`${styles.reactionButton} ${selected === r ? styles.selected : ''}`}
        >
          {r.charAt(0).toUpperCase() + r.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default Reactions;
