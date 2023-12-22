import { redirect } from "react-router-dom"
import { BACKEND_URL, PATH_TO_ENDPOINT_MAPPING } from "../constants/api"
import { CATEGORIES } from "../constants/categories"


export const productsListLoader = ({ 
    params: { gender, category, subcategory},
    request
}) => {
    const pageUrl = new URL(request.url)
    const page = pageUrl.searchParams.get('page') || 1
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

        url = `${url}&_limit=8&_page=${page}`

        return fetch(url).then(response => {
            const numberOfPages = Math.ceil(Number(response.headers.get('X-Total-Count'))/8)

            return response.json().then(products => ({
                products,
                numberOfPages
            }))
        })
    } else {
        redirect('/kobieta')
    }
}