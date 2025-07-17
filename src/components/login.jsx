import React from 'react';

const Login = ({setUserLoginMethod}) => {
    const goToSignUp = (e) => {
        e.preventDefault();
        setUserLoginMethod("register");
    };
    return (
        <form>
        <label htmlFor="username">Tengo que recordar tu nombre</label>
        <input type="text" id="username" name="username" required/>
        <label htmlFor="password">Y tu contraseña para verificarte</label>
        <input type="password" id="password" name="password" required/>
        <button id="login-btn">Confirmo quien soy</button>
        <span>Sin cuenta, no te preocupes, <button onClick={e=>goToSignUp(e)}>Registrate aquí</button></span>
    </form>
    );
}

export default Login;