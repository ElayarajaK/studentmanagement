import * as React from 'react';
import {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function AddStudents() {

    const[s_name,setName]=useState("");
    const[s_address,setaddress]=useState("");
    const[marks,setMarks]=useState("");
    const[marks2,setLangMarks]=useState("");
    const[students,setStudent]=useState("");

    const hadleClick=(temp)=>{
        temp.preventDefault()
        const Studentlog = {s_name,s_address,marks,marks2}
        console.log(Studentlog)
        console.log(JSON.stringify(Studentlog));
        fetch("http://localhost:8080/AddStudent",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(Studentlog)
        }).then(()=>{
            console.log("new Student added")
        })
    }

    useEffect(()=>{
        fetch("http://localhost:8080/listStudents")
        .then(res=>res.json()).then((temp)=>{
            setStudent(temp);
            console.log(temp)
        })
    },[]);
  return (
    <form
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    
      <TextField value={s_name} onChange={(temp) => setName(temp.target.value)} id="standard-basic" label="Student Name" variant="standard" />
      <TextField value={s_address}  onChange={(temp) => setaddress(temp.target.value)}  id="standard-basic" label="Student Address" variant="standard" />
      <TextField value={marks}  onChange={(temp) => setMarks(temp.target.value)}  id="standard-basic" label="Math Marks" variant="standard" />
      <TextField value={marks2}   onChange={(temp) => setLangMarks(temp.target.value)}  id="standard-basic" label="Lang Marks" variant="standard" />
      <Button variant="contained" color="success" onClick={hadleClick}>  Success</Button>
      <br/>
      
     
    </form>
  
    
  );
}

export default AddStudents;