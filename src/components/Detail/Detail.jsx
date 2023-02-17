import styDetail from "./Detail.module.css";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Detail() {
  let { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={styDetail.detail}>
      <div className={styDetail.detail__data}>
        <h1>Nombre: {character?.name}</h1>
        <h3>Status: {character?.status}</h3>
        <h3>Especie: {character?.species}</h3>
        <h3>Género: {character?.gender}</h3>
        <h3>Origen: {character.origin?.name}</h3>
        <hr />
        <Link to={"/home"}>
          <button className={styDetail.btnreturn}>Home</button>
        </Link>
      </div>
      <div className={styDetail.detail__image}>
        <img src={character?.image} alt={character?.name} />
      </div>
    </div>
  );
}
