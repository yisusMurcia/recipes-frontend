import React from 'react';

const Register = ({userLoginMethod}) => {
    const goToSignUp = (e) => {
        e.preventDefault();
        userLoginMethod("login");
    };
    return (
        <form method="post">
        <span class="error-message"></span>
        <label htmlFor="username">Tu nombre de usuario</label>
        <input type="text" id="username" name="username" required/>

        <label htmlFor="password">Tu contraseña</label>
        <input type="password" id="password" name="password" required/>

        <label htmlFor="userRol">Selecciona tu rol</label>
        <select name="userRol" id="userRol">
            <option value="user">Usuario</option>
            <option value="admin">Administrador</option>
        </select>
        <label htmlFor="adminPassword">Tu clave de administrador</label>
        <input type="password" id="adminPassword" name="adminPassword"  required disabled/>
        <button id="sign-up-btn">Registrarme</button>
        
        <span>Ya tienes cuenta, no hay problema, <button onClick={e=> goToSignUp(e)}>Inicia sesión aquí</button></span>
    </form>
    );
}

export default Register;
