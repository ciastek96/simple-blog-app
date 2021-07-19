const ADD_FAVORITE = "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";

const initialState = {
  favorites: [],
};

const favoriteReducer = (favorite = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      return {
        favorites: [...favorite.favorites, payload],
      };
    case REMOVE_FAVORITE:
      return {
        favorites: [
          ...favorite.favorites.filter(
            (favorite) => favorite.id !== payload.id
          ),
        ],
      };
    default:
      return favorite;
  }
};

export default favoriteReducer;
