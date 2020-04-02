import React from "react";
import "./style.css"

function TableData(props) {
    return (
        <table className="table-data">
            <tbody>
                <tr className="thread">
                    <th>Picture</th>
                    <th>Full Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>BOB</th>
                </tr>
                {props.people.map(person => (
                    <tr>
                        <td><img src={person.picture.medium} alt={`${person.name.first} ${person.name.last} profile picture`}></img></td>
                        <td>{`${person.name.first} ${person.name.last}`}</td>
                        <td>{person.phone}</td>
                        <td>{person.email}</td>
                        <td>{person.dob.date.substring(0, 10)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableData;