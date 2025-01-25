import React from "react";
import { useContext } from "react";
import { useState } from "react";
import GlobalState from "../GlobalState";

function Login() {
  const { setFullName } = useContext(GlobalState);
  const [name, setName] = useState("");
  const handler = (e) => {
    setName(e.target.value);
  };
  const logInHandler = () => {
    if(name.length === 0){
    alert("Empity fill is not allowed") 
      return;
  }
    setFullName(name);
  };
  return (
    <React.Fragment>
      <input placeholder="Full Name" value={name} onChange={handler}></input>
      <button onClick={logInHandler}>Login</button>
    </React.Fragment>
  );
}
export default Login;
