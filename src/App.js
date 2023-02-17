import styApp from "./App.module.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/Nav";
import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import Favorites from "./components/Favorites/Favorites";
import About from "./components/About/About";
import Error from "./components/Error/Error";

export default function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [access, setAccess] = useState(true);
  const [userData, setUserData] = useState({
    usrname: "",
    usremail: "",
    usrpass: "",
  });
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function login(loginData) {
    if (
      loginData.usrpass === userData.usrpass &&
      loginData.usremail === userData.usremail
    ) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Incorrect session data");
    }
  }

  function register(registerData) {
    setUserData({
      usrname: registerData.usrname,
      usremail: registerData.usremail,
      usrpass: registerData.usrpass,
    });
    alert("Registered user Successfully!!");
  }

  function logout() {
    setAccess(false);
    navigate("/");
  }

  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let exist = characters.find((e) => e.id === data.id);
          if (exist) {
            window.alert("Requested Character Already Exists");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("There are no characters with that ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters((current) => {
      return current.filter((char) => char.id !== id);
    });
  };

  return (
    <div className={styApp.container}>
      {pathname === "/" ? null : <NavBar logout={logout} onSearch={onSearch} />}
      <Routes>
        <Route
          exact
          path="/"
          element={<Login login={login} register={register} />}
        />
        <Route
          exact
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route exact path="/detail/:detailId" element={<Detail />} />
        <Route
          exact
          path="/favorites"
          element={<Favorites characters={characters} onClose={onClose} />}
        />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      ;
    </div>
  );
}
