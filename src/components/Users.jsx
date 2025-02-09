import React from "react";
import { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [loading, setloading] = useState(true)
    useEffect(
        () => {
            axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
                setUsers(response.data);
                setloading(false)
            }).catch((error) => {
                console.log(error)
            })

        }, []
    )
    if (loading) {
        return <h2>Loading</h2>
    }

    return (
        <div>
            <h1>Users List</h1>
            <p>This is the users collection </p>
            <Table striped bordered hover>
                <thead>
                    <tr>                      
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map( (user) => {
                        return (
                            <tr key={user.id}>
                                <td><Link to={`/Users/${user.id}`}>{user.name}</Link> </td>
                                <td>{user.email} <Link></Link> </td>
                                <td>{user.phone}</td>
                            </tr>
                        )
                    }) }
                </tbody>
            </Table>
        </div>

    )
}
export default Users;