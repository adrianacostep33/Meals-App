import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  id: [],
  addFavorie: (id) => {},
  removeFavorite: () => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState();

  function addFavorie() {
    setFavoriteMealIds((currentFavIds) => [currentFavIds, id]);
  }

  function removeFavorite() {
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
