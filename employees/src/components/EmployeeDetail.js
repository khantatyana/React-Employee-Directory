import React from "react";
import EmployeeTableBody from "./EmployeeTableBody";
import { Table } from "react-bootstrap";

function EmployeeDetail({employees}) {

    return (
        
        <Table striped bordered hover size="sm">
            <thead>
                <tr style={{backgroundImage: "linear-gradient(120deg,#448877,#fbc531)"}}>
                    <th># ID</th>
                    <th>Picture</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Phone number</th>
                    <th>Email</th>
                    <th>Country</th>
                </tr>
            </thead>
            <EmployeeTableBody employees={employees} />
        </Table>

    );
}

export default EmployeeDetail;