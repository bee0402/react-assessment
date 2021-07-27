import React , { useState, useEffect } from 'react';  
import axios from 'axios';
import User from './User';

function Body(): JSX.Element{ 
    const [users, setUsers] = useState([]);
    const [clickedUser, setClickedUser] = useState(null);
    const url = 'https://jsonplaceholder.typicode.com/users';
    
    useEffect(() => { 
        getUsers();
    }, []);

    const userClicked = (user: any) => { 
        setClickedUser(user);
    };

    const removeClicked = () => {
        setClickedUser(null);
    }

    const getUsers = () => { 
        axios.get(url)
        .then((response) => { 
            setUsers(response.data);
        })  
        .catch(error => console.error(`Error: ${error}`))
    };

    return !clickedUser ? <>{ 
        users.map((user, key) => {
            return (                    
                <div onClick={() => userClicked(user)} key={key}>
                    <User user={user} key={key}/>   
                </div>
            )
        })
    }</>
    : <div>        
        <button onClick={() => removeClicked()}> Back </button>
        <User user={clickedUser}/>
    </div>
}

export default Body;