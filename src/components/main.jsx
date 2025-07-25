import React, {useEffect, useState} from 'react';
import { getAllRecipes } from '../api/recipes';
import RecipeCard from './recipeCard';
import NavRecipes from './navRecipes';

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
                <NavRecipes saveRecipes={saveRecipes} userId={user.id}  />
            </header>

             {
                //Cargar las recetas
                recipes? recipes.map(recipe=> <RecipeCard recipe={recipe} key={recipe.id}/>): null
             }

             <div>
                <buttton>
                    <i class="fa-solid fa-arrow-left"></i>
                </buttton>
                <buttton>
                    <i class="fa-solid fa-arrow-right"></i>
                </buttton>
             </div>

        </>
    );
}

export default Main;
