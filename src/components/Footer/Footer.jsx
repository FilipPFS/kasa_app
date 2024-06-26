import React from 'react'
import styles from "./Footer.module.scss";
import logoWhite from "../../images/logo-white.webp"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <img src={logoWhite} alt='Logo du site'/>
        <span className={styles.desc}>© 2020 Kasa. All rights reserved</span>
    </footer>
  )
}

export default Footer