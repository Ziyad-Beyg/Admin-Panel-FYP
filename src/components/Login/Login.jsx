import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import GoogleLogin from "react-google-login";
// import { gapi } from "gapi-script";
import "./Login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  // useEffect(() => {
  //     function start() {
  //         gapi.client.init({
  //             clientId: "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com",
  //             scope: ""
  //         })
  //     }
  //     gapi.load('client: auth2', start)
  // })

  const login = () => {
    if (email.trim() === "" && password.trim() === "") return false;
    console.log(email, password);
    if (email === "admin@gmail.com" && password === "123123123") {
      navigate(`/dashboard`);
    } else {
      popup();
      setEmail('')
      setPassword('')
    }
  };

  const [popupStyle, showPopup] = useState("hide");

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  const onSuccess = (e) => {
    alert("User signed in");
    console.log(e);
  };

  const onFailure = (e) => {
    alert("User sign in Failed");
    console.log(e);
  };

  return (
    <div className="page">
      <div className="cover">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="login-btn" onClick={login}>
          Login
        </div>

        {/* <p className="text">Or login using</p> */}

        {/* <div className="alt-login"> */}
        {/* <div className="facebook"></div> */}
        {/* <div className="google">
                    <GoogleLogin className="blue"
                        clientId="79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com"
                        buttonText=""
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={false} // alternative is true, which keeps the user signed in
                        icon={false}    // alt is true, and this puts the google logo on your button, but I don't like it
                        theme="dark"  // alternative is light, which is white
                    /> 
    </div>*/}
        {/* </div> */}

        <div className={popupStyle}>
          <h3>Login Failed</h3>
          {/* <p>Username or password incorrect</p> */}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
