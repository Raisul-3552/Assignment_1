import React from 'react';
import styles from '../css/Home.module.css';

function Pagination() {
  return (
    <div className={styles.pagination}>
      <button>1</button>
      <button>2</button>
      <button>3</button>
    </div>
  );
}

export default Pagination;
