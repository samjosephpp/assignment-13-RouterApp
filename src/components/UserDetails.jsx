import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const UserDetails = () => {
    const { id } = useParams();
    const user = useLoaderData();
    return (
        //     <div>
        //     <h1>User Details</h1>
        //     <p>ID: {user.id}</p>
        //     <p>Name: {user.name}</p>
        //     <p>Username: {user.username}</p>
        //     <p>Email: {user.email}</p>
        //     <p>Phone: {user.phone}</p>
        //     <p>Website: {user.website}</p>
        // </div>
        <Card style={{ width: '18rem' }} >
            <Card.Body>
                <Card.Title>User Details</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{user.name}</Card.Subtitle>
                <Card.Text>
                    <p>ID: {user.id}</p>                   
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                </Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
        </Card>
    )
}

export default UserDetails;

export const UserDetailLoader = async ({ params }) => {
    const { id } = params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json();
    return user;
}