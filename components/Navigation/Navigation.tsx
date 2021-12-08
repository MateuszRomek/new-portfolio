import React from 'react';
import styles from './Navigation.module.scss';
import { SocialLinks } from '../../config/SocialLinks';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.text}>
        <h2>MR.</h2>
        <span>frontend developer</span>
      </div>

      <div className={styles.socials}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a
              className={styles.externalLink}
              href={SocialLinks.twitter}
              target="_blank"
              rel="noreferrer"
            >
              tw
            </a>
          </li>

          <li className={styles.listItem}>
            <a
              className={styles.externalLink}
              href={SocialLinks.linkedIn}
              target="_blank"
              rel="noreferrer"
            >
              in
            </a>
          </li>
          <li className={styles.listItem}>
            <a
              className={styles.externalLink}
              href={SocialLinks.github}
              target="_blank"
              rel="noreferrer"
            >
              gh
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.contactMe}>
        <ul className={styles.list}>
          <li className={styles.listItem}>side projects</li>
          <li className={styles.listItem}>contact me</li>
        </ul>
      </div>
    </nav>
  );
};
