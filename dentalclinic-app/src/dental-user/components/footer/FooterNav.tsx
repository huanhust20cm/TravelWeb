import React from 'react';
import styles from './FooterNav.module.scss';

const FooterNav: React.FC<A> = () => {
  return (
    <div className={styles.footerNav}>
      <div className={styles.footerInfo}>
        <header>Logo</header>
        <div>Logo</div>
        <div>Logo</div>
      </div>
      <div className={styles.footerService}>
        <header>footerService</header>
        <div>footerService</div>
        <div>footerService</div>
      </div>
      <div className={styles.footerAbout}>
        <header>footerAbout</header>
        <div>footerAbout</div>
        <div>footerAbout</div>
      </div>
      <div className={styles.footerSocialMedia}>
        <header>footerSocialMedia</header>
        <div>footerSocialMedia</div>
        <div>footerSocialMedia</div>
      </div>
    </div>
  );
};

export default React.memo(FooterNav);
