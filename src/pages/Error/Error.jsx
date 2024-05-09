import React from 'react'
import styles from "./Error.module.scss";
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <main className={styles.container}>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/accueil">Retourner sur la page d’accueil</Link>
    </main>
  )
}

export default Error