import styles from "./CenteredContent.module.css"

export const CenteredContent = ({ children }) => (
    <div className={styles.wrapper}>
        { children }
    </div>
)