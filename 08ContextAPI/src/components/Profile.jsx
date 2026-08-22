import React , {useContext , useState} from 'react';
import userContext from '../context/userContext';

function Profile() {
    const {user} = useContext(userContext);
    if(!user) return <div>Pls Login</div>
    return (
        <div> 
            <h2>Profile</h2>
            <h3>Username : {user.username}</h3>
            <h3>Email : {user.email}</h3>
        </div>
    )
}

export default Profile;