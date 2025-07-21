export async function getAllRecipes(){
    try{const response = await fetch(`http://localhost:8080/api/recipes/all`,{
            method: 'GET',
        }
        )

        if(response.ok){
            return await response.json();
        }
    } catch(e){
        console.error(e);
    }
}