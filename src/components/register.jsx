import React, { useState } from 'react';
import RegisterUser from '../api/register';
import { useNavigate } from 'react-router-dom';

const Register = ({setUser}) => {
    const navigate = useNavigate();
    const [selectAdmin, setSelectAdmin] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        const registerDto = {
            username: e.target.username.value,
            password: e.target.password.value,
            userRol: e.target.userRol.value,
            adminPassword: e.target.adminPassword.value
        };
        const user = await RegisterUser(registerDto).then(user =>{ 
                if(typeof user === 'object') {//Check if is created sucesfully
                    setUser(user); // Set user state
                }
        }
        );

    }
    return (
        <form method="post" onSubmit={handleRegister}>
        <label htmlFor="username">Tu nombre de usuario</label>
        <input type="text" id="username" name="username" required/>

        <label htmlFor="password">Tu contraseña</label>
        <input type="password" id="password" name="password" required/>

        <label htmlFor="userRol">Selecciona tu rol</label>
        <select name="userRol" id="userRol" onChange={e=>setSelectAdmin(e.target.value=="admin")}>
            <option value="user">Usuario</option>
            <option value="admin">Administrador</option>
        </select>
        {selectAdmin?<>
            <label htmlFor="adminPassword">Tu clave de administrador</label>
            <input type="password" id="adminPassword" name="adminPassword"  required disabled/>
        </>: null}

        <input type='submit' id="sign-up-btn" value="Registrarme" />
        
        <span>Ya tienes cuenta, no hay problema, <button onClick={()=>navigate("/sign-in")}>Inicia sesión aquí</button></span>
    </form>
    );
}

export default Register;
