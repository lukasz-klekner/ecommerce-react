import { NavLink, useParams } from "react-router-dom";
import styles from "./ExpandableMenu.module.css"
import { CATEGORIES } from "../../constants/categories";
import ARROW_ICON from "../../assets/arrow.svg"

const PATH_TO_GENDER_NAME = {
    kobieta: "Kobieta",
    mezczyzna: "Mężczyzna",
    dziecko: "Dziecko",
};


export const ExpandableMenu = () => {
    const { gender, category } = useParams()

    return (
        <div className={styles.expandableMenu}>
            <p>{PATH_TO_GENDER_NAME[gender]}</p>
            <ul>
                {CATEGORIES.map(({path, categoryName, subcategories}) =>(
                    <li key={path}>
                        <NavLink to={`/${gender}/${path}`}>
                            {categoryName}
                            <img src={ARROW_ICON} className={category === path ? styles.expanded : ''} />
                        </NavLink>
                        {category === path && <ul>
                            {subcategories.map(({path, categoryName}) => (
                                <li key={path}>
                                    <NavLink to={`/${gender}/${category}/${path}`}>
                                        {categoryName}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>}
                    </li>
                ))}
            </ul>
        </div>
    )
}