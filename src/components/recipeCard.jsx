import React from 'react';

const RecipeCard = ({recipe}) => {
    return (
        <div class="recipe bg-white p-6 rounded-lg shadow-md flex flex-col">
            <p class="recipe_title text-2xl font-semibold text-gray-800 mb-3"><b>{recipe.title}</b></p>
            <p class="text-lg font-medium text-gray-700 mb-2"><b>Ingredientes:</b></p>
            <ul class="recipe_ingredients list-disc list-inside text-gray-600 mb-4 flex-grow">
                {recipe.ingredients.split(",").map((ingredient) => 
                    <li>{ingredient}</li>
                )}
            </ul>
            <p class="text-lg font-medium text-gray-700 mb-2"><b>Etiquetas:</b></p>
            <ul class="recipe_tags flex flex-wrap gap-2 mb-4">
    
                {recipe.foodTypes.map(tag =>
                    <li class="bg-blue-200 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">{tag}</li>
                )}
                
                {recipe.foodIntentions.map(tag =>
                    <li class="bg-green-200 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">{tag}</li>
                )}
            </ul>
            <p class="text-lg font-medium text-gray-700 mb-2"><b>Instrucciones:</b></p>
            <p class="recipe_instructions text-gray-600 leading-relaxed">{recipe.instructions}</p>
            <button id="edit-recipe1">
                <i class="fas fa-edit"></i>
            </button>
        </div>
    );
}

export default RecipeCard;
