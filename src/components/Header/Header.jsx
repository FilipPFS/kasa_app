import React from 'react'
import logo from "../../images/logo.webp"
import { Link, useLocation } from 'react-router-dom';
import styles from "./Header.module.scss"

const Header = () => {

  const location = useLocation();
  
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt='Logo du site'/>
      <nav>
        <ul>
          <Link to="/accueil" className={location.pathname === '/' || location.pathname === '/accueil' ? styles.active : ''}>Accueil</Link>
          <Link to="/apropos" className={location.pathname === '/apropos' ? styles.active : ''}>A Propos</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header