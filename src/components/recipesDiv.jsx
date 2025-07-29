import React, {useState, useEffect} from 'react';
import { getAllRecipes } from '../api/recipes';
import RecipeCard from './recipeCard';
import NavRecipes from './navRecipes';

const RecipesDiv = ({userId}) => {
    const [recipes, setRecipes] = useState();
    const [asyncFunc, setAsyncFunc] = useState(()=>(page)=>getAllRecipes(page));
    let [page, setPage] = useState(0)

    const getRecipes = async () => {
        const data = await asyncFunc(page);
        setRecipes(data);
    }

    //When setted a new asyncFunc, the page´ll be 0
    useEffect(()=>{
        getRecipes()
    }, [asyncFunc, page])


    const incrementPage =()=>{setPage(page+1)
    }
    const decrementPage =()=>{
        setPage(page!=0?page-1: 0)
    }
    return (
        <section>
            <NavRecipes setAsyncFunc={setAsyncFunc} userId={userId} setPage={setPage} />
            <div>
                {
                    //Cargar las recetas
                    recipes? recipes.map(recipe=> <RecipeCard recipe={recipe} key={recipe.id}/>): null
                }
            </div>
             <nav>
                <button onClick={decrementPage}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button onClick={incrementPage}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
             </nav>
        </section>
    );
}

export default RecipesDiv;
