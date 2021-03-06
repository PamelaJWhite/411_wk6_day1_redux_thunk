import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export function CustomTable(props) {
    console.log(props)
  const classes = useStyles();

  return (
    // <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
           
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Make</TableCell>
            <TableCell align="right">Actions</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            
            </TableRow> */}
          {/* ))} */}
        </TableBody>
      </Table>
    // </TableContainer>
  );
}
