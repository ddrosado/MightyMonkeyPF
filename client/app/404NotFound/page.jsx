import React from "react";
import imgage from "../../assets/images/logo404.png";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


const NotFound = () => {

return (
    <div className={styles.container}>
        <div className={styles.content}>
            <Link href="/home">
            <Image className={styles.imgage}src={imgage} alt="404" />
            <h1>404 Not Found</h1>
            </Link>
            
        </div>
    </div>
);
};

export default NotFound;