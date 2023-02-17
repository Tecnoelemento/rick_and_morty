import styFavorites from "./Favorites.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import {
  filterMyFavorites,
  orderMyFavorites,
  resetFilters,
} from "../../redux/actions";

export default function Favorites(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((select) => select.myFavorites);

  function handleClick(evt) {
    evt.preventDefault();
    const { name, value } = evt.target;
    if (name === "filter") {
      return dispatch(filterMyFavorites(value));
    }
    if (name === "order") {
      dispatch(orderMyFavorites(value));
    }
  }

  return (
    <>
      <div className={styFavorites.cards}>
        <div>
          <select name="order" defaultValue={"Default"} onChange={handleClick}>
            <option value="Default" disabled>
              Select Order
            </option>
            <option value="Upward">Upward</option>
            <option value="Falling">Falling</option>
          </select>
          <select name="filter" defaultValue={"Default"} onChange={handleClick}>
            <option value="Default" disabled>
              Select Filter
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="Unknown">Unknown</option>
          </select>
          <div>
            <button onClick={() => dispatch(resetFilters())}>Reset</button>
          </div>
        </div>
        {myFavorites?.map((fav) => {
          return (
            <Card
              key={fav.id}
              id={fav.id}
              name={fav.name}
              species={fav.species}
              gender={fav.gender}
              image={fav.image}
              onClose={() => props.onClose(fav.id)}
            />
          );
        })}
      </div>
    </>
  );
}
