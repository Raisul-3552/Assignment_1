import React from 'react';
import Post from './Post';
import Pagination from './Pagination';
import styles from '../css/Home.module.css';

function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Welcome to the Home Page</h1>
      <Post />
      <Pagination />
    </div>
  );
}

export default Home;
