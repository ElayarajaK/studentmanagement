import {useState,useEffect} from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ListStudent(){
    const[students,setStudent]=useState("");

    const val =[{s_id:100,name:"raja"}]
    useEffect(()=>{
        fetch("http://localhost:8080/listStudents")
        .then(res=>res.json()).then((temp)=>{
            setStudent(temp);
            console.log(temp)
        })
    },[]);

    return(
       
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Student_id</TableCell>
              <TableCell align="right">Student Name</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Marks</TableCell>
              <TableCell align="right">Marks2</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((row) => (
              <TableRow
                key={row.s_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.s_name}
                </TableCell>
                <TableCell align="right">{row.s_name}</TableCell>
                <TableCell align="right">{row.s_address}</TableCell>
                <TableCell align="right">{row.marks}</TableCell>
                <TableCell align="right">{row.marks2}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        
    )
}

export default ListStudent;

/*

*/