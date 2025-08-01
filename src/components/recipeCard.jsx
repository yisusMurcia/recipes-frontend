import { useState, useEffect } from "react";
import { isFav} from "../api/recipes";
import { markAsFav, deletFromFav } from "../api/user";


const RecipeCard = ({recipe, user}) => {
    const [isLiked, setIsLiked] = useState();

    const markAsFavorite= async()=>{
        const response = await markAsFav(recipe.id, user.id);
        setIsLiked(true);
    }

    const markAsNotFave= async ()=>{
        const response = await deletFromFav(recipe.id, user.id);
        setIsLiked(false);
    }

    useEffect(()=>{
        isFav(recipe.id, user.id).then((res) => {
            setIsLiked(res);
        });
    }, [isLiked])

    const handleLike = () => {
        if (isLiked) {
            markAsNotFave();
        }else{
            markAsFavorite();
        }
    }

    useEffect(()=>{
        const editBtn = document.getElementById(`edit-recipe-${recipe.id}`);
        if(recipe.userId != user.id && user.userRol == "USER"){
            editBtn.disabled = true;
        }
    }, [])
    return (
        <div className="recipe bg-white p-6 rounded-lg shadow-md flex flex-col">
            <p className="recipe_title text-2xl font-semibold text-gray-800 mb-3"><b>{recipe.title}</b></p>
            <p className="text-lg font-medium text-gray-700 mb-2"><b>Ingredientes:</b></p>
            <ul className="recipe_ingredients list-disc list-inside text-gray-600 mb-4 flex-grow">
                {recipe.ingredients.split(",").map((ingredient) => 
                    <li key={ingredient}>{ingredient}</li>
                )}
            </ul>
            <p className="text-lg font-medium text-gray-700 mb-2"><b>Etiquetas:</b></p>
            <ul className="recipe_tags flex flex-wrap gap-2 mb-4">
    
                {recipe.foodTypes.map(tag =>
                    <li key={tag} className="bg-blue-200 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">{tag}</li>
                )}
                
                {recipe.foodIntentions.map(tag =>
                    <li key={tag} className="bg-green-200 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">{tag}</li>
                )}
            </ul>
            <p className="text-lg font-medium text-gray-700 mb-2"><b>Instrucciones:</b></p>
            <p className="recipe_instructions text-gray-600 leading-relaxed">{recipe.instructions}</p>
            <button onClick={handleLike}>
                <i className={`fa-${isLiked?"solid":"regular"} fa-heart`}></i>
            </button>
            <button id={`edit-recipe-${recipe.id}`}>
                <i className="fas fa-edit"></i>
            </button>
        </div>
    );
}

export default RecipeCard;