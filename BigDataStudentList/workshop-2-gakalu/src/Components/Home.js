import React from "react";
import { useContext } from "react";
import { useState } from "react";
import GlobalState from "../GlobalState";
import Student from "./Student";
export default function Home() {
  const { state, setFullName } = useContext(GlobalState);
  const [show, setShow] = useState(false);
  const [list, setList] = useState(true);
  const logoutHandler = () => {
    setFullName(null);
  };
  const showHandler = () => {
    setShow(!show);
  };
  const listHandler = () => {
    setList(!list);
  };
  return (
    <React.Fragment>
      <h1>WellCome{state.fullname}</h1>
      <button onClick={showHandler}>Add Student</button>
      <button onClick={logoutHandler}>Log out</button>
      {show ? <Student /> : null};
      <button onClick={listHandler}>List of Student</button>
    </React.Fragment>
  );
}
