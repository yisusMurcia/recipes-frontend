import React, {useState, useEffect} from 'react';
import { getAllRecipes, getTotalPages } from '../api/recipes';
import RecipeCard from './recipeCard';
import NavRecipes from './navRecipes';
import NoContent from './noContent';

const RecipesDiv = ({user}) => {
    const [recipes, setRecipes] = useState();
    const [asyncFunc, setAsyncFunc] = useState(()=>(page)=>getAllRecipes(page));
    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState();

    const getRecipes = async () => {
        const data = await asyncFunc(page);
        setRecipes(data);
    }

    //When setted a new asyncFunc, the page´ll be 0
    useEffect(()=>{
        const beforeBtn = document.getElementById("before-btn");
        const afterBtn = document.getElementById("after-btn");

        //Enable the buttons
        beforeBtn.disabled = false;
        afterBtn.disabled = false;

        getRecipes()
        if(page == 0){
            beforeBtn.disabled = true;
        }else if(page+1 >= totalPages){
            afterBtn.disabled = true;
        }
    }, [asyncFunc, page])

    useEffect(()=> async()=>{
        const newtotalPages = await getTotalPages();
        setTotalPages(newtotalPages);
    }, [asyncFunc])

    const incrementPage =()=>{setPage(page+1)
    }
    const decrementPage =()=>{
        setPage(page!=0?page-1: 0)
    }
    return (
        <section>
            <NavRecipes setAsyncFunc={setAsyncFunc} userId={user.id} setPage={setPage} />
            <div>
                {
                    //Cargar las recetas
                    recipes? recipes.map(recipe=> <RecipeCard recipe={recipe} user={user} key={recipe.id}/>): <NoContent />
                }
            </div>
             <nav>
                <button id='before-btn' onClick={decrementPage}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button id='after-btn' onClick={incrementPage}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
             </nav>
        </section>
    );
}

export default RecipesDiv;