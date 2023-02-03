import styCard from "./Card.module.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={styCard.card}>
      <div className={styCard.card__content}>
        <button
          className={styCard.card__content_btn}
          onClick={() => props.onClose(props.id)}
        >
          X
        </button>
        <img
          className={styCard.card__content_img}
          src={props.image}
          alt={props.image}
        />
        <Link to={`/detail/${props.id}`}>
          <h2 className={styCard.card__content_name}>{props.name}</h2>
        </Link>
        <div className={styCard.card__content__text}>
          <h2>Specie: {props.species}</h2>
          <h2>Gender: {props.gender}</h2>
        </div>
      </div>
    </div>
  );
}
