export async function getAllRecipes(){
    try{const response = await fetch(`http://localhost:8080/api/recipes/all?page=0&size=3`,{
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