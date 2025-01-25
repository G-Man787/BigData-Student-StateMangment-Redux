import Login from "./Components/logIn";
import Home from "./Components/Home";
import GlobalState from "./GlobalState";
import { useReducer } from "react";
import { useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INIT":
      return action.payload;
    case "setFullName":
      return { ...state, fullname: action.payload };
    case "addStudent":
      return { ...state, students: action.payload };
    case "deleteStudent":
      return { ...state, students: action.payload };
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, { fullname: "", students: ['Getachew','Akalu','Alemu'] });
  const setName = (string) => {
    dispatch({ type: "setFullName", payload: string });
    localStorage.setItem("dataWorkshop2", JSON.stringify(state));
  };
  const addNewStudent = (student) => {
    const copy = [...state.students];
    copy.push(student);
    dispatch({ type: "addStudent", payload: copy });
    localStorage.setItem("dataWorkshop2", JSON.stringify({...state,students:copy}));
  };
  const deleteStudent = (student) => {
    let copy = [...state.students];
    copy = copy.filter((stu) => stu.email !== student.email);
    dispatch({ type: "deleteStudent", payload: copy });
    localStorage.setItem("dataWorkshop2", JSON.stringify({...state,students:copy}));
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("dataWorkshop2"));
    dispatch({ type: "INIT", payload: data });
  }, []);

  return (
    
    <GlobalState.Provider
      value={{ state, setName, addNewStudent, deleteStudent}}
    >
    <Home /> 
    <Login />
    </GlobalState.Provider>
  );
}
export default App;
