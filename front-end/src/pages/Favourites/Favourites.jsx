import { useLoaderData } from "react-router-dom";
import { FavouritesList } from "../../components/FavouritesList/FavouritesList";

export const Favourites = () => {
  const favoritesProducts = useLoaderData()

  return (
    <FavouritesList favourites={favoritesProducts} />
  )
} 