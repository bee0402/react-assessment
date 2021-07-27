import React from 'react';

function User(props: any) {     
    return ( 
        <>
            <p> Name: {props.user.name} </p>
            <p> Email: {props.user.email} </p>
            <p> Address: {props.user.address.street + props.user.address.suite + props.user.address.city} , {props.user.address.zipcode} </p>
            <p> Phone Number: {props.user.phone}</p>
            <p> Website: <a href={ "https://" + props.user.website }  target="_blank">{props.user.website}</a></p>
        </>
    )
}

export default User;