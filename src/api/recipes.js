export async function getAllRecipes(){
    try{const response = await fetch(`http://localhost:8080/api/recipes/all?page=0&size=3`,{
            method: 'GET'
        }
        )

        if(response.ok){
            return await response.json();
        }
    } catch(e){
        console.error(e);
    }
}

export async function getRecipeByUserId(userId){
    try{
        const response = await fetch(`http://localhost:8080/api/recipes/user-recipes/${userId}?page=0&size=3`,
            {method: "GET"}
        )

        if(response.ok){
            return await response.json();
        }
    }catch(e){
        console.log(e)
    }
}

export async function getFavRecipes(userId) {
    try{
        const response = await fetch(`http://localhost:8080/api/recipes/fav-recipes/${userId}?page=0&size=3`,
            {method: "GET"}
        )

        if(response.ok){
            return await response.json();
        }else{
            return null
        }
    }catch(e){
        console.log(e)
    }   
}