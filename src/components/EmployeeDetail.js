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
                    <th fieldname="name.first" onClick={handleOnClick}>First Name</th>
                    <th fieldname="name.last" onClick={handleOnClick}>Last Name</th>
                    <th fieldname="dob.age" onClick={handleOnClick}>Age</th>
                    <th fieldname="phone" onClick={handleOnClick}>Phone number</th>
                    <th fieldname="email" onClick={handleOnClick}>Email</th>
                    <th fieldname="location.country" onClick={handleOnClick}>Country</th>
                </tr>
            </thead>
            <EmployeeTableBody employees={employees} />
        </Table>

    );
}

export default EmployeeDetail;