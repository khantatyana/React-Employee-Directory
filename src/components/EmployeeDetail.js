import React from 'react';
import EmployeeTableBody from "./EmployeeTableBody";
import { Table } from "react-bootstrap";
import "./style.css";

function EmployeeDetail({employees}, {handleOnClick}) {

    return (
        
        <Table striped bordered hover size="sm">
            <thead className="tableHeader">
                <tr className="gradient" >
                    <th># ID</th>
                    <th >Picture</th>
                    <th fieldname="name.first" handleOnClick={handleOnClick}>First Name</th>
                    <th fieldname="name.last" handleOnClick={handleOnClick}>Last Name</th>
                    <th fieldname="dob.age" handleOnClick={handleOnClick}>Age</th>
                    <th fieldname="phone" handleOnClick={handleOnClick}>Phone number</th>
                    <th fieldname="email" handleOnClick={handleOnClick}>Email</th>
                    <th fieldname="location.country" handleOnClick={handleOnClick}>Country</th>
                </tr>
            </thead>
            <EmployeeTableBody employees={employees} />
        </Table>

    );
}

export default EmployeeDetail;