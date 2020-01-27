import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Plan je route</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/">Tickets & Abonnementen</Link>
      </li>
    </ul>
  </nav>
)
