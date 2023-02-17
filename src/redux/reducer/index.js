import {
  ADD_MY_FAVORITES,
  DELETE_MY_FAVORITES,
  FILTER_MY_FAVORITES,
  ORDER_MY_FAVORITES,
  RESET_FILTERS,
} from "../actions/types";

const initialState = {
  myFavorites: [],
  myFavoritesOrigin: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_MY_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };
    case DELETE_MY_FAVORITES:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((fav) => fav.id !== payload),
      };
    case FILTER_MY_FAVORITES:
      const filterCopy = [...state.myFavoritesOrigin];
      const filter = filterCopy.filter((fav) => fav.gender === payload);
      return {
        ...state,
        myFavorites: filter,
      };
    case ORDER_MY_FAVORITES:
      const orderCopy = [...state.myFavoritesOrigin];
      const order = orderCopy.sort((a, b) => {
        if (a.id > b.id) {
          return "Upward" === payload ? 1 : -1;
        }
        if (a.id < b.id) {
          return "Falling" === payload ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: order,
      };
    case RESET_FILTERS:
      return {
        ...state,
        myFavorites: [...state.myFavoritesOrigin],
      };
    default:
      return { ...state };
  }
}
