import React, {useEffect, useState} from 'react';
import { getAllRecipes } from '../api/recipes';
import RecipeCard from './recipeCard';

const Main = ({user}) => {
    const [recipes, setRecipes] = useState();

    const saveRecipes = async()=>{
        await getAllRecipes().then(recipes=> {
            console.log(recipes)
            setRecipes(recipes)})
    }

    useEffect(()=>{saveRecipes()}, [])
    return (
        <>
            <header>
                <h1> Bienvenid@ {user.username} a la aplicación de recetas</h1>
            </header>

            
             {
                //Cargar las recetas
                recipes? recipes.map(recipe=> <RecipeCard recipe={recipe}/>): null
             }
        </>
    );
}

export default Main;
