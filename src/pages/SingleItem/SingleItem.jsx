import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import data from "../../data.json";
import Pictures from '../../components/Pictures/Pictures';
import Stars from '../../components/Stars/Stars';
import styles from "./SingleItem.module.scss";
import Collapse from '../../components/Collapse/Collapse';

const SingleItem = () => {

    const { itemId } = useParams();
    const selectedItem = data.find(item => item.id === itemId)

    if (!selectedItem) {
        return <Navigate to="*" replace />;
      }

    const singleItem = selectedItem;
    const pictures = singleItem.pictures;

    return (
        <main className={styles.main}>
            <Pictures
                pictures={pictures}
            />
            <div className={styles.postInfo}>
                <section className={styles.firstInfo}>
                    <span className={styles.title}>{singleItem.title}</span>
                    <span className={styles.location}>{singleItem.location}</span>
                    <div className={styles.tags}>{singleItem.tags.map((tag, index) => {
                        return (
                            <span className={styles.singleTag} key={index}>{tag}</span>
                        )
                    })}</div>
                </section>
                <section className={styles.secondInfo}>
                    <div className={styles.userInfo}>
                        <span className={styles.hostName}>{singleItem.host.name}</span>
                        <img src={singleItem.host.picture} alt='Profile avatar' />
                    </div>
                    <Stars rating={singleItem.rating} />
                </section>
            </div>
            <div className={styles.postCollapses}>
                <div className={styles.descCollapse}>
                    <Collapse
                        title={"Description"}
                        desc={singleItem.description} />
                </div>
                <div className={styles.equipCollapse}>
                    <Collapse
                        title={"Equipements"}
                        desc={singleItem.equipments.map((item, index) => <p key={index}>{item}</p>)}
                    />
                </div>
            </div>
        </main>
    )
}

export default SingleItem