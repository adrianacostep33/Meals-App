import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorie: (id) => {},
  removeFavorite: (id) => {},
});

export function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorie(id) {
    setFavoriteMealIds((currentFavIds) => [currentFavIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorie: addFavorie,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
