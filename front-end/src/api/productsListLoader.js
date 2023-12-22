import { redirect } from "react-router-dom"
import { BACKEND_URL, PATH_TO_ENDPOINT_MAPPING } from "../constants/api"
import { CATEGORIES } from "../constants/categories"


export const productsListLoader = ({ params: { gender, category}}) => {
    const foundCategory = CATEGORIES.map(({ path }) => path === category)
    const foundGender = PATH_TO_ENDPOINT_MAPPING[gender]

    if(foundGender && foundCategory){
        return fetch(`${BACKEND_URL}/products/?gender=${foundGender}&category=${category}`)
    } else {
        redirect('/kobieta')
    }
}