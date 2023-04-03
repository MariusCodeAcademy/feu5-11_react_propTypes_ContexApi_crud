import React from 'react';
import css from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className={css.header}>
      <div className={['container', css.flex].join(' ')}>
        <Link className={css.navLink} to={'/'}>
          Logo
        </Link>
        <nav>
          <NavLink className={css.navLink} to={'/'}>
            Home
          </NavLink>
          <NavLink className={css.navLink} to={'/users'}>
            Users
          </NavLink>
          <NavLink className={css.navLink} to={'/contact'}>
            Contact
          </NavLink>
          <h3 className={css.navLink}>User email</h3>
        </nav>
      </div>
    </header>
  );
}

export default Header;
