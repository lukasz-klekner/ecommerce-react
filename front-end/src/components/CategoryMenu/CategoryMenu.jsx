import { NavLink, useParams } from "react-router-dom";
import styles from "./CategoryMenu.module.css"
import { CATEGORIES } from "../../constants/categories";

export const CategoryMenu = () => {
    const { gender } = useParams()

    return (
        <div className={styles.categoryMenu}>
            <ul>
                {CATEGORIES.map(({ categoryName,path }) => (
                    <li key={path}>
                        <NavLink to={`${gender}/${path}`}>
                            {categoryName}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}