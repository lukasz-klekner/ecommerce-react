import { BACKEND_URL } from "../constants/api"

export const favouritesLoader = () => {
    return fetch(`${BACKEND_URL}/favourites?_expand=product`)
}