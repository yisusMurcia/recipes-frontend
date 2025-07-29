import React, {useEffect, useState} from 'react';
import { getAllRecipes } from '../api/recipes';
import RecipesDiv from './recipesDiv';

const Main = ({user}) => {
    const [recipes, setRecipes] = useState();

    const saveRecipes = async(asyncFunc)=>{
        await asyncFunc().then(recipes=> {
            setRecipes(recipes)})
    }

    useEffect(()=>{saveRecipes(getAllRecipes)}, [])
    return (
        <>
            <header>
                <h1> Bienvenid@ {user.username} a la aplicación de recetas</h1>
            </header>
            <RecipesDiv userId={user.id} />
        </>
    );
}

export default Main;
