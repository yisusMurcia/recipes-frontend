import React from 'react';


const RecipeCard = ({recipe}) => {
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
            <button id="edit-recipe1">
                <i className="fas fa-edit"></i>
            </button>
        </div>
    );
}

export default RecipeCard;