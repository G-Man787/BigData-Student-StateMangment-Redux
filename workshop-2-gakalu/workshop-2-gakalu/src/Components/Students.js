import React from 'react';
import { useContext } from 'react';
import GlobalState from '../GlobalState';
import Student from './Student';

function Students(){
    const{state}=useContext(GlobalState)
    return(
    <div>
    {
     state.Students.map(student=>{
    return(
        <Student student={student}/>
    )
     })   
    }
    </div>
    )
};
  export default Students;