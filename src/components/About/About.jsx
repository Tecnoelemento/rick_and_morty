import styAbout from "./About.module.css";
import develop from "../../assets/develop.jpg";
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className={styAbout.about}>
      <div className={styAbout.about__photo}>
        <img className={styAbout.about__photo_img} src={develop} />
      </div>
      <div className={styAbout.about__data}>
        <h1 className={styAbout.about__data_tittle}>About me...</h1>
        <p className={styAbout.about__data_text}>
          My name is José Amaya, this is one of my practice projects done at
          Henry's BootCamp... Thank you for visiting my App and I hope you enjoy
          browsing it.
        </p>
        <Link to={"/home"}>
          <button className={styAbout.btnreturn}>Return</button>
        </Link>
      </div>
    </div>
  );
}
