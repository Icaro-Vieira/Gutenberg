import React from 'react';
import "../../assets/styles/style.css";
import Logo from '../../assets/icons/logo';
import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <header>
          <Logo/>
          <nav>
             <ul>
                <NavLink to="/home" className={({isActive}) => (isActive ? "li" : "li-inative")}>Home</NavLink>
                <NavLink to="/favorites" className={({isActive}) => (isActive ? "li" : "li-inative")}>Favorites</NavLink>
             </ul>
          </nav>
        </header>
    )
}
