import React from "react";
import EmployeeTableBody from "./EmployeeTableBody";
import { Table } from "react-bootstrap";

function EmployeeDetail({employees}, {handleOnClick}) {

    return (
        
        <Table striped bordered hover size="sm" >
            <thead >
                <tr style={{
                    backgroundImage: "linear-gradient(120deg,#448877,#fbc531)", 
                    position: "-webkit-sticky",
                    position: "sticky",
                    top: "0"}}>
                    <th># ID</th>
                    <th >Picture</th>
                    <th handleOnClick={handleOnClick}>First Name</th>
                    <th handleOnClick={handleOnClick}>Last Name</th>
                    <th handleOnClick={handleOnClick}>Age</th>
                    <th handleOnClick={handleOnClick}>Phone number</th>
                    <th handleOnClick={handleOnClick}>Email</th>
                    <th handleOnClick={handleOnClick}>Country</th>
                </tr>
            </thead>
            <EmployeeTableBody employees={employees} />
        </Table>

    );
}

export default EmployeeDetail;