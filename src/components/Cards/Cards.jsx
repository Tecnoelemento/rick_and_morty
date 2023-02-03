import styCards from "./Cards.module.css";
import React from "react";
import Card from "../Card/Card";

export default function Cards(props) {
  return (
    <div className={styCards.cards}>
      {props.characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={props.onClose}
        />
      ))}
    </div>
  );
}
