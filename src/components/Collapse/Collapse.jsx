import React, { useState } from 'react'
import styles from "./Collapse.module.scss";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

const Collapse = ({ title, desc }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [rotated, setRotated] = useState(false);
    const [clicked, setClicked] = useState(0);

    const handleCollapseClick = () => {
        setRotated(!isOpen);
        setClicked(prevClicked => prevClicked + 1);
        setIsOpen(prevOpen => !prevOpen);
    };

    console.log("Clicked", clicked)

    return (
        <div className={styles.collapse}>
            <div className={styles.container}>
                <h3 className={styles.title}>{title}</h3>
                <span className={`${styles.icon} ${rotated ? styles.rotated : clicked && styles.rotatedBack}`} onClick={handleCollapseClick}>
                    {!isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </span>
            </div>
            <div className={`${styles.desc} ${isOpen ? styles.descOpen : clicked && styles.descClosed}`}>{desc}</div>
        </div>
    )
}

export default Collapse