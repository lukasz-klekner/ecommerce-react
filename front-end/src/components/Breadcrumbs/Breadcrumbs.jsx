import { NavLink, useParams } from "react-router-dom"
import styles from "./Breadcrumbs.module.css"
import ARROW_ICON from "../../assets/arrow.svg"
import { CATEGORIES, GENDERS } from "../../constants/categories"

export const Breadcrumbs = () => {
    const { gender, category, subcategory } = useParams()

    const foundGender = GENDERS.find(({ path }) => gender === path)
    const foundCategory = CATEGORIES.find(({ path }) => category === path)

    const breadcrumbs = [
        {
            categoryName: foundGender.categoryName,
            path: `/${foundGender.path}`,
        },
        {
            categoryName: foundCategory.categoryName,
            path: `/${foundGender.path}/${foundCategory.path}`,
        },
    ]

    if(subcategory){
        const foundSubcategory = foundCategory.subcategories.find(({ path }) => path === subcategory)
        breadcrumbs.push({
            categoryName: foundSubcategory.categoryName,
            path: `/${foundGender.path}/${foundCategory.path}/${foundSubcategory.categoryName}`,            
        })
    }

    return (
        <ul className={styles.breadcrumbs}>
            {breadcrumbs.map(({ path, categoryName }) =>(
                <li key={path}>
                    <NavLink end to={path}>
                        {categoryName}
                        <img src={ARROW_ICON} />
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}