import React, { useEffect, useState } from 'react'
import logo from "../../images/logo.webp"
import { Link, useLocation } from 'react-router-dom';
import styles from "./Header.module.scss"

const Header = () => {

  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt='Logo du site'/>
      <nav>
        <ul>
          <Link to="/accueil" className={location.pathname === '/' || location.pathname === '/accueil' ? styles.active : ''}>{windowWidth > 750 ? "Accueil" : "ACCUEIL"}</Link>
          <Link to="/apropos" className={location.pathname === '/apropos' ? styles.active : ''}>{windowWidth > 750 ? "A Propos" : "A PROPOS"}</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header