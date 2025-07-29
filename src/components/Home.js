import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/Home.module.css';

function Home() {
  const navigate = useNavigate();
  const [reaction, setReaction] = useState('');
  const [comments] = useState([
    { id: 1, author: 'Atik', date: '10 February 2025', text: 'The children of Gaza deserve peace and safety.' },
    { id: 2, author: 'Sayem', date: '11 February 2025', text: 'We must raise awareness for their difficult lives.' }
  ]);

  return (
    <div className={styles.homeContainer}>
      <h2 className={styles.postTitle}>
        Children of Gaza: Their Lives and Hope
      </h2>
      <p className={styles.postSubText}>
        The innocent children in Gaza face hardships daily but hold onto hope.
      </p>

      {/* Gaza Child Image */}
      <img src="OIP.jpeg" alt="Gaza Child" className={styles.imageBox} />

      <p className={styles.caption}>
        Let’s stand with the children of Gaza and support their future.
      </p>

      <div className={styles.authorInfo}>
        <div className={styles.authorFlex}>
          <div>
            <button onClick={() => navigate('/author')} className={styles.authorButton}>
              Raisul Hasan
            </button>
            <p className={styles.authorDate}>7 January 2025</p>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      <p className={styles.postBody}>
        Every day, children in Gaza live amidst conflict and uncertainty. Their resilience and hope inspire us to work for peace and justice. We must never forget their stories and continue to advocate for a better tomorrow.
      </p>

      <hr className={styles.divider} />

      <div className={styles.reactionSummary}>
        <div className={styles.reactionContainer}>
          {['Like', 'Love', 'Angry', 'Sad'].map((r) => (
            <button
              key={r}
              onClick={() => setReaction(r)}
              className={`${styles.reactionButton} ${reaction === r ? styles.selected : ''}`}
            >
              {r}
            </button>
          ))}
        </div>
        <p className={styles.reactionStats}>
          Like 20% &nbsp;&nbsp; Love 60% &nbsp;&nbsp; Angry 5% &nbsp;&nbsp; Sad 5%
        </p>
      </div>

      <div className={styles.commentSection}>
        <h4>20 Comments</h4>
        <div className={styles.commentInputBox}>
          <input type="text" placeholder="Write your comment.." />
          <button>&rarr;</button>
        </div>

        {comments.map((comment) => (
          <div key={comment.id} className={styles.commentBox}>
            <strong>{comment.author}, {comment.date}</strong>
            <p>{comment.text}</p>
            <div className={styles.commentActions}>
              <span>Like 12</span>
              <span>Dislike 1</span>
              <span>Reply</span>
              <span className={styles.report}>Report</span>
            </div>
          </div>
        ))}

        <div className={styles.pagination}>
          <button>1</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
