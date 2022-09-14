import React, { useEffect, useState } from 'react';
import './AdminHome.css';
import Logo from '../../img/log.jpg';
import { AiOutlineLogout } from 'react-icons/ai';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { getAllUsers } from '../../api/UserRequest';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }


// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
const AdminHome = () => {

  const [persons,setPersons] = useState([]);
    const {user}  = useSelector((state) => state.authReducer.authData);
    const posts = useSelector((state) => state.postReducer.posts);


    useEffect(()=>{
        const fetchPersons = async()=>{
            const {data} = await getAllUsers();
            console.log('111',data);
            setPersons(data)
        }
        fetchPersons()
    },[])

  return (
    <div className="adminhome">
      
      <img src={Logo} width="15%" alt=''/>
      {/* <div className="logout">
      <AiOutlineLogout />

      </div> */}
            <div className="table">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>USERS</StyledTableCell>
            <StyledTableCell align="right">POSTS</StyledTableCell>
            <StyledTableCell align="right">NO.OF.FOLLOWERS</StyledTableCell>
            <StyledTableCell align="right">NO.OF.FOLLOWING</StyledTableCell>
            <StyledTableCell align="right">EMAIL</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {persons.map((row,id) => (
            
            <StyledTableRow key={id}>
              <StyledTableCell component="th" scope="row">
                {row.firstname} {row.lastname}
              </StyledTableCell>
              <StyledTableCell align="right">{posts.filter((post)=>post.userId === user._id).length}</StyledTableCell>
              <StyledTableCell align="right">{row.followers.length}</StyledTableCell>
              <StyledTableCell align="right">{row.following.length}</StyledTableCell>
              <StyledTableCell align="right">{row.username}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>

    </div>
  );
}

export default AdminHome;
