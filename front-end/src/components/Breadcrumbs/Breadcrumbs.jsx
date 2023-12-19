import { NavLink } from "react-router-dom"
import styles from "./Breadcrumbs.module.css"
import ARROW_ICON from "../../assets/arrow.svg"

export const Breadcrumbs = () => {
    const BREADCRUMBS = [
        {
            categoryName: "Kobieta",
            path: "kobieta",
        },
        {
            categoryName: "Odzież",
            path: "odziez",
        },
        {
            categoryName: "Swetry",
            path: "swetry",
        },
    ]

    return (
        <ul className={styles.breadcrumbs}>
            {BREADCRUMBS.map(({ path, categoryName }) =>(
                <li key={path}>
                    <NavLink to={path}>
                        {categoryName}
                        <img src={ARROW_ICON} />
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}