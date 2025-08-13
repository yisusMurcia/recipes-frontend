import React, { useEffect, useState } from 'react';
import { getFoodIntentions, getFoodTypes } from '../api/foodData';
import { createRecipe, updateRecipe } from '../api/recipes';
import { useLocation, useNavigate } from 'react-router-dom';

const Recipe = ({user}) => {
    //Use params for determinate if is edit or create
    const location = useLocation();
    const navigate = useNavigate();

    const [saveRecipeFunc, setSaveRecipeFunc] = useState(()=>(recipeDto)=>createRecipe(recipeDto));

    const edit = location.state != null;

    const [foodIntentions, setFoodIntentions] = useState([]);
    const [foodTypes, setFoodTypes] = useState([]);

    const loadData = async()=>{
        await getFoodIntentions().then(intentions=>setFoodIntentions(intentions));
        await getFoodTypes().then(types=>setFoodTypes(types));
    }

    useEffect(()=>{
        loadData();

        if(edit){
            const recipeDto = location.state;
            console.log(recipeDto)

            setSaveRecipeFunc(()=>(recipeDto)=>updateRecipe(recipeDto))

            //Charge components
            document.getElementById("name").value = recipeDto.title;
            document.getElementById("ingredients").value = recipeDto.ingredients;
            document.getElementById("instructions").value = recipeDto.instructions;

        }
    }, [])

    const handleBtn= (e)=>{
        e.preventDefault();
        
        // Selecciona todos los checkboxes dentro del fieldset con la clase "food_type"
        const foodTypeCheckboxes = document.querySelectorAll('.food_type input[type="checkbox"]:checked');
        // Crea un array a partir de los nodos seleccionados y mapea sus valores
        const foodIntentionCheckboxes = document.querySelectorAll('.food_intention input[type="checkbox"]:checked');

        const recipeDto = {
            id: edit? location.state.id : null,
            title: document.getElementById("name").value,
            ingredients: document.getElementById("ingredients").value,
            instructions: document.getElementById("instructions").value,
            foodIntentions: Array.from(foodIntentionCheckboxes).map(checkbox => checkbox.value),
            foodTypes: Array.from(foodTypeCheckboxes).map(checkbox => checkbox.value),
            userId: user.id
        }

        saveRecipeFunc(recipeDto).then(status=> status? alert("Receta creada correctamente"): alert("algo salió mal"))
        navigate("/");
    }
    return (
        <form  className="recipe_form">
        <label htmlFor="name">Nombre de la receta:</label>
        <input type="text" id="name" name="name" required placeholder="Ej. Pastel de avena" />

        <label htmlFor="ingredients">Ingredientes:</label>
        <textarea id="ingredients" name="ingredients" rows="4" required placeholder="Ej. 1 tz avena&#10 1 huevo&#10 1 banano macerado"></textarea>

        <section className="recipe_characteristics">

            <fieldset className="food_intention" key={"inteniton"}>
                <p>¿Cuál es la intención de la receta?</p>

                {foodIntentions.map(foodIntention=>
                    <>
                        <input type="checkbox" name="intentions" value={foodIntention} id={foodIntention} defaultChecked={edit && location.state.foodIntentions.includes(foodIntention)}/>
                        <label htmlFor={foodIntention}>{foodIntention}</label>
                    </>)}
            </fieldset>

            <fieldset className="food_type" key={"type"}>
                <p>¿Qué tipo de comida es?</p>

                {foodTypes.map(foodType=> 
                    <>
                        <input type="checkbox" name="intentions" value={foodType} id={foodType} defaultChecked={edit && location.state.foodTypes.includes(foodType)}/>
                        <label htmlFor={foodType}>{foodType}</label>
                    </>
                )}

            </fieldset>

        </section>

        <label htmlFor="instructions">Instrucciones:</label>
        <textarea id="instructions" name="instructions" rows="4" required placeholder="Ej. 1. Mezclar todos los secos&#10 2. Mezclar los líquidos e integrar&#10 3. Hornear en un molde"></textarea>

        <button className="submit_btn" id="create-btn" onClick={e=>handleBtn(e)}>Crear Receta</button>
    </form>
    );
}

export default Recipe;
