import React from "react";
import * as Components from "./Components";
import Validate from "./validation";

function Login({ login, register }) {
  const [signIn, toggle] = React.useState(true);
  const [userData, setUserData] = React.useState({
    usrname: "",
    usremail: "",
    usrpass: "",
  });
  const [errors, setErrors] = React.useState({
    usrname: "",
    usremail: "",
    usrpass: "",
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

  function handleValidate(evt) {
    evt.preventDefault();
    const evalErrors = Validate(userData);

    if (Object.values(evalErrors).length !== 0) {
      alert("You must complete the data");
    } else {
      evt.target.name === "Login" ? handleSubmit(true) : handleSubmit(false);
    }
  }

  function handleSubmit(status) {
    if (status) {
      login(userData);
    } else {
      register(userData);
    }
  }

  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form name="Register" onSubmit={handleValidate}>
          <Components.Title>Create Account</Components.Title>
          <Components.Input
            type="text"
            name="usrname"
            value={userData.usrname}
            onChange={handleInputChange}
            placeholder="Name"
          />
          {!errors.usrname ? null : (
            <Components.Error>{errors.usrname}</Components.Error>
          )}
          <Components.Input
            type="email"
            name="usremail"
            value={userData.usremail}
            onChange={handleInputChange}
            placeholder="Email"
          />
          {!errors.usremail ? null : (
            <Components.Error>{errors.usremail}</Components.Error>
          )}
          <Components.Input
            type="password"
            name="usrpass"
            value={userData.usrpass}
            onChange={handleInputChange}
            placeholder="Password"
          />
          {!errors.usrpass ? null : (
            <Components.Error>{errors.usrpass}</Components.Error>
          )}
          <Components.Button type="submit">Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form name="Login" onSubmit={handleValidate}>
          <Components.Title>Sign in</Components.Title>
          <Components.Input
            type="email"
            name="usremail"
            value={userData.usremail}
            onChange={handleInputChange}
            placeholder="Email"
          />
          {!errors.usremail ? null : (
            <Components.Error>{errors.usremail}</Components.Error>
          )}
          <Components.Input
            type="password"
            name="usrpass"
            value={userData.usrpass}
            onChange={handleInputChange}
            placeholder="Password"
          />
          {!errors.usrpass ? null : (
            <Components.Error>{errors.usrpass}</Components.Error>
          )}
          <Components.Button type="submit">Sigin In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>¡Welcome!</Components.Title>
            <Components.Paragraph>
              Sign in to start the Adventure...
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>¡Dear User!</Components.Title>
            <Components.Paragraph>
              You are in the Rick and Morty application...
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sigin Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default Login;
