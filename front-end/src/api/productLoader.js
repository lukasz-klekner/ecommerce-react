import { BACKEND_URL } from "../constants/api"

export const productLoader = ({ params: { productId }}) => {
    return fetch(`${BACKEND_URL}/products/${productId}`)
}