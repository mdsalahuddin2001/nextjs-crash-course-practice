import headerStyles from '../styles/Header.module.css';

import React from 'react';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Developer</span>News
      </h1>
      <p className={headerStyles.description}>
        Be updated with the latest trending news
      </p>
    </div>
  );
};

export default Header;
