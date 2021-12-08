import React from 'react';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div>
        <div className={styles.text}>
          <h3>Building web applications</h3>
          <div>
            <p>
              Hello, I' m Mateusz and as you can see I'm a frontend developer, currently working at
              Boldare as Frontend engineer. I've been building stuff on the web for several years,
              I've made countless side projects and I also posses magical powers to build delightful
              user interfaces.
            </p>
            <p>
              I'm very comfortable with a variety of tools. Typically I'll be digging in with React,
              TypeScript, RxJs but Node.js is also no stranger to me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
