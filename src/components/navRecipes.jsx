import React from 'react';
import { getAllRecipes, getRecipeByUserId, getFavRecipes } from '../api/recipes';

const NavRecipes = ({saveRecipes, userId}) => {
    const handleAllBtn= async()=>{
        await saveRecipes(getAllRecipes);
    }

    const handleFavBtn = async()=>{
        await saveRecipes(()=>getFavRecipes(userId));
    }

    const handleUserBtn = async()=>{
        await saveRecipes(()=>getRecipeByUserId(userId));
    }

    return (
        <nav>
           <li><button onClick={handleAllBtn}>Todas</button></li>
           <li><button onClick={handleFavBtn}>Favoritas</button></li>
           <li><button onClick={handleUserBtn}>Mias</button></li>
        </nav>
    );
}

export default NavRecipes;
