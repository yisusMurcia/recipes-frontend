import React from 'react';
import LoginUser from '../api/login';

const Login = ({setUserLoginMethod, setUser}) => {
    const goToLogin = (e) => {
        e.preventDefault();
        setUserLoginMethod("register");
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const loginDto = {
            username: e.target.username.value,
            password: e.target.password.value
        };
        const user = await LoginUser(loginDto).then(user => {
                if(typeof user === 'object') { // Check if login was successful
                    console.log("Login successful:", user);
                    setUser(user); // Set user state
                }
            });
    }
    return (
        <form method='post' onSubmit={handleLogin}>
        <label htmlFor="username">Tengo que recordar tu nombre</label>
        <input type="text" id="username" name="username" required/>
        <label htmlFor="password">Y tu contraseña para verificarte</label>
        <input type="password" id="password" name="password" required/>
        <input type='submit'value= "Confirmo quien soy" />
        <span>Sin cuenta, no te preocupes, <button onClick={e=>goToLogin(e)}>Registrate aquí</button></span>
    </form>
    );
}

export default Login;