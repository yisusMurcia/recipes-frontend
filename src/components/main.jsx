import React from 'react';

const Main = ({user}) => {
    return (
        <>
            <header>
                <h1> Bienvenid@ {user.username} a la aplicación de recetas</h1>
            </header>
        </>
    );
}

export default Main;
