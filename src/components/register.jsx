import React from 'react';
import RegisterUser from '../api/register';

const Register = ({setUserLoginMethod}) => {
    const goToSignUp = (e) => {
        e.preventDefault();
        setUserLoginMethod("login");
    };


    const handleRegister = async (e) => {
        e.preventDefault();
        const registerDto = {
            username: e.target.username.value,
            password: e.target.password.value,
            userRol: e.target.userRol.value,
            adminPassword: e.target.adminPassword.value
        };
        const user = await RegisterUser(registerDto).then(user => 
            console.log(user)
        );

    }

    //Enable/disable admin password field based on user role selection
    const handleRoleChange = (e) => {
        const adminPasswordField = document.getElementById("adminPassword");
        if (e.target.value === "admin") {
            adminPasswordField.disabled = false;
        } else {
            adminPasswordField.disabled = true;
        }
    }
    return (
        <form method="post" onSubmit={handleRegister}>
        <span class="error-message"></span>
        <label htmlFor="username">Tu nombre de usuario</label>
        <input type="text" id="username" name="username" required/>

        <label htmlFor="password">Tu contraseña</label>
        <input type="password" id="password" name="password" required/>

        <label htmlFor="userRol">Selecciona tu rol</label>
        <select name="userRol" id="userRol" onChange={handleRoleChange}>
            <option value="user">Usuario</option>
            <option value="admin">Administrador</option>
        </select>
        <label htmlFor="adminPassword">Tu clave de administrador</label>
        <input type="password" id="adminPassword" name="adminPassword"  required disabled/>
        <input type='submit' id="sign-up-btn" value="Registrarme" />
        
        <span>Ya tienes cuenta, no hay problema, <button onClick={e=> goToSignUp(e)}>Inicia sesión aquí</button></span>
    </form>
    );
}

export default Register;
