import { BACKEND_URL } from "../constants/api"

export const deleteFavouriteAction = ({ params: { productId}}) => {
    return fetch(`${BACKEND_URL}/favourites/${productId}`,
    {
        method: 'DELETE',
    })
}