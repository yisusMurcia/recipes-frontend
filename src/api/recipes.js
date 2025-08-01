export async function getAllRecipes(page = 0){
    try{const response = await fetch(`http://localhost:8080/api/recipes/all?page=${page}&size=3`,{
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

export async function getRecipeByUserId(userId, page= 0){
    try{
        const response = await fetch(`http://localhost:8080/api/recipes/user-recipes/${userId}?page=${page}&size=3`,
            {method: "GET"}
        )

        if(response.ok){
            return await response.json();
        }
    }catch(e){
        console.log(e)
    }
}

export async function getFavRecipes(userId, page = 0) {
    try{
        const response = await fetch(`http://localhost:8080/api/recipes/fav-recipes/${userId}?page=${page}&size=3`,
            {method: "GET"}
        )

        if(response.ok){
            return await response.json();
        }
    }catch(e){
        console.log(e)
    }   
}

export async function getTotalPages(){
    try{
        const response = await fetch(`http://localhost:8080/api/recipes/total-pages`)
        if(response.ok){
            return await response.json();
        }
    }catch(e){
        console.log(e)
    }
}

export async function isFav(recipeId, userId) {
    try{
        const response = await fetch(`http://localhost:8080/api/recipes/${recipeId}/isFav/${userId}`)
        if(response.ok){
            return await response.json();
        }
    }catch(e){
        console.log(e)
    }
}