import React, { Component } from 'react';
import GramLogo from './gramQuiz.svg';
import styles from './styles';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logo}>
        <img src={GramLogo} />
      </div>
      <div className={styles.logoTitle}>Enneagram Quiz Forum</div>
    </div>
  );
};

export default Logo;
