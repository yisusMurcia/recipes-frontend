import React from 'react';
import LoginUser from '../api/login';

const Login = ({setUserLoginMethod}) => {
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
        console.log("Login DTO:", loginDto);
        const user = await LoginUser(loginDto).then(user => {
                console.log("Login successful:", user);
            });
    }
    return (
        <form method='post' onSubmit={handleLogin}>
        <label htmlFor="username">Tengo que recordar tu nombre</label>
        <input type="text" id="username" name="username" required/>
        <label htmlFor="password">Y tu contraseña para verificarte</label>
        <input type="password" id="password" name="password" required/>
        <input type='submit' id="login-btn" value= "Confirmo quien soy" />
        <span>Sin cuenta, no te preocupes, <button onClick={e=>goToLogin(e)}>Registrate aquí</button></span>
    </form>
    );
}

export default Login;