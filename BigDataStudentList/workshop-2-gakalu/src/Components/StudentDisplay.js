import React from "react";
import { useContext } from "react";
import GlobalState from "../GlobalState";
import Student from "./Student";
function StudentDisplay({ student }) {
  const { deleteStudent } = useContext(GlobalState);
  const deleteHandler = () => {
    deleteStudent(student);
  };
  return (
    <table>
      <tr>
        <th>FullName</th>
        <th>Email Address</th>
        <th>Id</th>
      </tr>
      <tr>
        <td>{Student.name}</td>
        <td>{Student.email}</td>
        <td>{Student.id}</td>
        <td>
          <button onClick={deleteHandler}>Delete</button>
        </td>
      </tr>
    </table>
  );
}
export default StudentDisplay;
