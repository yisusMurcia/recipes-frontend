import React, { useState } from 'react';
import Register from './register.jsx';
import Login from './login.jsx';

const IdentifyUser = ({setUser}) => {
    const [userLoginMethod, setUserLoginMethod] = useState('login'); // Default to 'login'
    return (
        userLoginMethod == 'login' ? <Login setUserLoginMethod = {setUserLoginMethod} setUser={setUser} /> : <Register setUserLoginMethod = {setUserLoginMethod} setUser={setUser} />
    );
}

export default IdentifyUser;
