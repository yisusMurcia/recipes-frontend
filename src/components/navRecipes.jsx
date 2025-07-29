import React from 'react';
import { getAllRecipes, getRecipeByUserId, getFavRecipes } from '../api/recipes';

const NavRecipes = ({setAsyncFunc, userId, setPage}) => {
    const handleAllBtn= async()=>{
        setPage(0)
        await setAsyncFunc(()=>(page)=>getAllRecipes(page));
    }

    const handleFavBtn = async()=>{
        setPage(0)
        await setAsyncFunc(()=>(page) =>getFavRecipes(userId, page));
    }

    const handleUserBtn = async()=>{
        setPage(0)
        await setAsyncFunc(()=>(page)=>getRecipeByUserId(userId, page));
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
