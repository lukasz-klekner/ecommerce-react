import { NavLink } from "react-router-dom"
import styles from "./Pagination..module.css"

export const Pagination = ({ numberOfPages }) => {
    const PAGES = Array.from({ length: numberOfPages}, (_, i) => i + 1)

    return (
        <ul className={styles.pagination}>
            {PAGES.map(page => (
                <li key={page}>
                    <NavLink to={`?page=${page}`}>{page}</NavLink>
                </li>
            ))}
        </ul>
    )
}