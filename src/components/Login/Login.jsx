import styLogin from "./Login.module.css";
import React from "react";
import Validate from "./validation";

export default function Login({ login }) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  function handleInputChange(evt) {
    setUserData({
      ...userData,
      [evt.target.name]: evt.target.value,
    });

    setErrors(
      Validate({
        ...userData,
        [evt.target.name]: evt.target.value,
      })
    );
  }

  function handleLogin(evt) {
    evt.preventDefault();
    const evalErrors = Validate(userData);

    if (Object.values(evalErrors).length !== 0) {
      alert("You must complete the data");
    } else {
      handleSubmit();
    }
  }

  function handleSubmit() {
    login(userData);
  }

  return (
    <div>
      <h1 className={styLogin.tittle}>¡Welcome Dear User!</h1>
      <form className={styLogin.form} onSubmit={handleLogin}>
        <h3 className={styLogin.text1}>
          You are in the Rick and Morty application...
        </h3>
        <h4 className={styLogin.text2}>Sign in to start the Adventure...</h4>
        <label className={styLogin.labels}>Username:</label>
        <input
          className={styLogin.inputlogin}
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        />
        {!errors.username ? null : (
          <p className={styLogin.danger}>{errors.username}</p>
        )}
        <label className={styLogin.labels}>Password:</label>
        <input
          className={styLogin.inputlogin}
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        {!errors.password ? null : (
          <p className={styLogin.danger}>{errors.password}</p>
        )}
        <div className={styLogin.buttons}>
          <button className={styLogin.btnlogin} type="submit">
            Login
          </button>
        </div>
      </form>
      <h5 className={styLogin.foot}>Thanks for visiting us...</h5>
    </div>
  );
}
