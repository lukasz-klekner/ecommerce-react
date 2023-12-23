import { BACKEND_URL } from "../constants/api"

export const addProductToFavouritesAction = ({ params: { productId }}) => {
    return fetch(`${BACKEND_URL}/favourites`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            productId: Number(productId),
        })
    })
}