import {
  ADD_MY_FAVORITES,
  DELETE_MY_FAVORITES,
  FILTER_MY_FAVORITES,
  ORDER_MY_FAVORITES,
  RESET_FILTERS,
} from "../actions/types";

export function addMyFavorites(character) {
  return {
    type: ADD_MY_FAVORITES,
    payload: character,
  };
}

export function deleteMyFavorites(id) {
  return {
    type: DELETE_MY_FAVORITES,
    payload: id,
  };
}

export function filterMyFavorites(status) {
  return {
    type: FILTER_MY_FAVORITES,
    payload: status,
  };
}

export function orderMyFavorites(order) {
  return {
    type: ORDER_MY_FAVORITES,
    payload: order,
  };
}

export function resetFilters() {
  return {
    type: RESET_FILTERS,
  };
}
