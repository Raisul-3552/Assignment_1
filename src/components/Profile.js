import React from 'react';
import styles from '../css/Profile.module.css';

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <div className={styles.avatar}></div>
        <div>
          <h2>Author Name</h2>
          <p>Joined: 7 January 2025</p>
        </div>
      </div>

      <div className={styles.profileBody}>
        <h3>About</h3>
        <p>This is a minimal author profile page to show routing works.</p>

        <h3>Posts</h3>
        <ul>
          <li>Post 1 - Lorem Ipsum Dolor</li>
          <li>Post 2 - Lorem Ipsum Dolor</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
