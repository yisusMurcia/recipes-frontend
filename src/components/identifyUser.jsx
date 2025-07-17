import React, { useState } from 'react';
import Register from './register.jsx';
import Login from './login.jsx';

const IdentifyUser = () => {
    const [userLoginMethod, setUserLoginMethod] = useState('login'); // Default to 'login'
    return (
        userLoginMethod == 'login' ? <Login setUserLoginMethod = {setUserLoginMethod} /> : <Register setUserLoginMethod = {setUserLoginMethod} />
    );
}

export default IdentifyUser;
