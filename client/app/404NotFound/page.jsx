import React from "react";
import imgage from "../../assets/images/logo404.png";
import Image from "next/image";
import styles from "./page.module.css";





const notFound = () => {

return (
    <div className={styles.container}>
        <div className={styles.content}>
            <Image className={styles.imgage}src={imgage} alt="404" />
            <h1>404 Not Found</h1>
        </div>
    </div>
);
};

export default notFound;