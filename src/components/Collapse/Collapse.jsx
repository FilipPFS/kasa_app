import React, { useState } from 'react'
import styles from "./Collapse.module.scss";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

const Collapse = ({ title, desc }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isRotating, setIsRotating] = useState(false);

    const handleCollapseClick = () => {
        setIsRotating(prevRotating => !prevRotating);
        setIsOpen(prevOpen => !prevOpen);
    };

    return (
        <div className={styles.collapse}>
            <div className={styles.container}>
                <h3 className={styles.title}>{title}</h3>
                <span className={`${styles.icon} ${isRotating && styles.rotate}`} onClick={handleCollapseClick}>
                    {!isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </span>
            </div>
            {isOpen && (
                <div className={styles.desc}>{desc}</div>
            )}
        </div>
    )
}

export default Collapse