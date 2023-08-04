import styles from "./page.module.css"

export const Unauthorized = () => {
    return(
        <div className={styles.unauthorizedContainer}>
            <div className={styles.content}>
                <h1>Sign in to see your profile</h1>
                </div>
            </div>
    )
}