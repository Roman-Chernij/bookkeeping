import React from 'react';
import Logo from "../../component/logo/Logo";
import './authorization.scss'

export default function Auth(props) {
  return (
    <div className="auth">
      <div className="auth-container">
        <header className="auth-header">
          <Logo/>
          <h1 className="auth-header__title">Домашняя бухгалтерия</h1>
        </header>
        <div className="auth-body">
          {props.children}
        </div>
      </div>
    </div>
  );
}
