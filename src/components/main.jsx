import React, {useEffect, useState} from 'react';
import { getAllRecipes } from '../api/recipes';
import RecipesDiv from './recipesDiv';
import { useNavigate } from 'react-router-dom';

const Main = ({user}) => {
    const navigate = useNavigate()
    const [recipes, setRecipes] = useState();

    const saveRecipes = async(asyncFunc)=>{
        await asyncFunc().then(recipes=> {
            setRecipes(recipes)})
    }
    useEffect(()=>{saveRecipes(getAllRecipes);
    }, [])
    return (
        <>
            <header>
                <h1> Bienvenid@ {user.username} a la aplicación de recetas</h1>
            </header>
            <RecipesDiv user={user} />
            <button id="new-recipe" onClick={()=>navigate("/new")}>
                <i className="fa-solid fa-plus icon"></i>
            </button>
        </>
    );
}

export default Main;
