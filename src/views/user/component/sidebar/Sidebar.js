import React from 'react';
import Logo from "../../../../component/logo/Logo";
import { NavLink } from 'react-router-dom'

import './sidebar.scss'
import { userRoutes } from '../../../../misc/router-config';
import { uniqueIdentifierGeneration } from '../../../../misc/uniqueIdentifierGeneration';

const Sidebar = props => {

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1><Logo />Бухгалтерия</h1>
      </div>
      <nav className="sidebar-nav">
        <ul className="sidebar-nav-list">
          {
            userRoutes.map(route => (
              <li key={uniqueIdentifierGeneration()} className="sidebar-nav-list__item">
                <NavLink exact className="sidebar-nav-list__link" to={route.path} activeClassName="active">
                  {route.title}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </aside>
  )
};

export default Sidebar;
