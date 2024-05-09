import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Card.module.scss"

const Card = ({ id, cover, title }) => {
    return (
        <Link className={styles.container} to={`/items/${id}`}>
            <img src={cover} alt={`Ìmage represente: ${title}`} />
            <h2>{title}</h2>
        </Link>
    )
}

export default Card