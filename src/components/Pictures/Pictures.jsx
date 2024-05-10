import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'
import styles from "./Pictures.module.scss";

const Pictures = ({ pictures }) => {

    console.log(pictures);

    const [index, setIndex] = useState(0);

    function previousImage() {
        if (index > 0) {
            setIndex(prevIndex => prevIndex - 1);
        } else {
            setIndex(pictures.length - 1);
        }
    }

    function nextImage() {
        setIndex(prevIndex => prevIndex + 1);
    }

    return (
        <div className={styles.container}>
            {pictures.length > 1 &&
                <button className={styles.left} onClick={previousImage}>
                    <ChevronLeftIcon />
                </button>}
            {index < pictures.length ? <img src={pictures[index]} alt='...'/> : setIndex(0)}
            {pictures.length > 1 && <button className={styles.right} onClick={nextImage}><ChevronRightIcon /></button>}
            <span className={styles.text}>{index + 1}/{pictures.length}</span>
        </div>
    )
}

export default Pictures