import React from 'react';
import styles from '../css/Profile.module.css';

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <div className={styles.avatar}></div>
        <div>
          <h2>A.B.M. Raisul Hasan Ratul</h2>
          <p>Joined: 7 January 2020</p>
        </div>
      </div>

      <div className={styles.profileBody}>
        <h3>About</h3>
        <p>.</p>

        <h3>Posts</h3>
        <ul>
          <li>Post 1 - Raising awareness for Gaza children</li>
          <li>Post 2 - Importance of global peace</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
