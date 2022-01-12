import React from 'react'
// fill out this container
// * On this page you need to use `material-ui` to create a button and a table. 
//Let's do that part first. Import Button, Table, TableHead, TableBody, TableRow and TableCell from "@material-ui/core". 
//You may also want to import "Container" to help with styling. 
//Remember to look at the Material UI docs if you don't understand how this works. 
// import {Button, Table, TableHead, TableBody, TableRow, TableCell} from "@material-ui/core" 
//ooooh, i can write this vertically
//this is NOT using the most recent Material UI version
//this is version 4
import {
    Button,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
  } from "@material-ui/core";
  import { CustomTable } from "../table"

const Import = (props) => {
    console.log("Inside of Import component props: ", props)
    return (
        <>
            <Button variant="contained" color="primary" href="#contained-buttons">
            Import
            </Button>
            <CustomTable>

            </CustomTable>

</>
    )
}

export default Import



  //* Create a button with the text "Import". Make its variant contained and its color primary. Then create a table underneath it. The table should have three columns (Id, Make, Actions).
