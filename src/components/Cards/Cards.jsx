import * as Components from "./Components";
import React from "react";
import Card from "../Card/Card";

export default function Cards(props) {
  const { characters } = props;

  return (
    <Components.Container>
      <Components.Tittle>Rick And Morty App!!</Components.Tittle>
      <Components.Btnrandom>Random Character</Components.Btnrandom>

      <Components.Containcards>
        {characters.map((char) => {
          return (
            <Card
              key={char.id}
              id={char.id}
              name={char.name}
              species={char.species}
              gender={char.gender}
              image={char.image}
              onClose={() => props.onClose(char.id)}
            />
          );
        })}
      </Components.Containcards>
    </Components.Container>
  );
}
