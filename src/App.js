import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/Nav";
import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";
import Error from "./components/Error/Error";

export default function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [access, setAccess] = React.useState(true);
  const username = "joseamaya@henry.com";
  const password = "Jose34full";
  const [characters, setCharacters] = useState([]);
  // const example = {
  //   name: "Summer Smith",
  //   species: "Human",
  //   gender: "Female",
  //   image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  // };

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let exist = characters.find((e) => e.id === data.id);
          if (exist) {
            window.alert("El Personaje Solicitado ya Existe");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters((current) => {
      return current.filter((char) => char.id !== id);
    });
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Incorrect session data");
    }
  }

  return (
    <div className="container">
      {pathname === "/" ? null : <NavBar onSearch={onSearch} />}
      <Routes>
        <Route exact path="/" element={<Login login={login} />} />
        <Route
          exact
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route exact path="/detail/:detailId" element={<Detail />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      ;
    </div>
  );
}
