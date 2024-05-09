import React from 'react'
import Card from '../Card/Card'
import styles from "./Gallery.module.scss";

const Gallery = ({ data }) => {

    return (
        <div className={styles.container}>{data.map((item) => {
            return (
                <Card
                    key={item.id}
                    id={item.id}
                    cover={item.cover}
                    title={item.title}
                />
            )
        })}</div>
    )
}

export default Gallery