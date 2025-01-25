import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import GlobalState from "../GlobalState";
function Student() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const changeNameHandler = (e) => {
    setName(e.target.value);
  };
  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const value = Math.floor(Math.random() * 5 + 1);
      setId(value);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const { Student, state } = useContext(GlobalState);
  const submitHandler = () => {
    const std = state.first.Students.filter((value) => (value.email = email));
    if (std.length > 0) {
      alert("Email exists");
      return;
    }
    Student({ name, email, Id: id });
  };
  return (
    <React.Fragment>
      <h1>Add new Student</h1>
      Full Name
      <br />
      <input
        placeholder="Full Name"
        value={name}
        onChange={changeNameHandler}
      />
      <br />
      Email
      <br />
      <input placeholder="Email" value={email} onChange={changeEmailHandler} />
      <br />
      Id
      <br />
      <input placeholder="Id" />
      <p>{id}</p>
      <button onClick={submitHandler}>Submit</button>
    </React.Fragment>
  );
}
export default Student;
