import React from 'react';
import Time from "./time/Time";

import './header.scss';
import { Profile } from '../profile/Profile';

const Header = props => {

  return (
    <header className="header">
      <Time />
      <Profile />
    </header>
  )
};

export default Header;
