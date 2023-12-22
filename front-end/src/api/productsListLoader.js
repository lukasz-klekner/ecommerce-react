import { redirect } from "react-router-dom"
import { BACKEND_URL, PATH_TO_ENDPOINT_MAPPING } from "../constants/api"
import { CATEGORIES } from "../constants/categories"


export const productsListLoader = ({ params: { gender, category, subcategory}}) => {
    const foundCategory = CATEGORIES.find(({ path }) => path === category)
    const foundGender = PATH_TO_ENDPOINT_MAPPING[gender]

    if(foundGender && foundCategory){
        let url = `${BACKEND_URL}/products/?gender=${foundGender}&category=${category}`

        const foundSubcategory = foundCategory.subcategories?.find(({ path }) => path === subcategory)

            if(foundSubcategory) {
            url = `${url}&subcategory=${subcategory}`
        } else {
            redirect('/kobieta')
        }

        return fetch(url)
    } else {
        redirect('/kobieta')
    }
}