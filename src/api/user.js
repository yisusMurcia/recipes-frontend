export async function markAsFav(recipeId, userId) {
    try{
        const response = await fetch(`http://localhost:8080/api/user/${userId}/addFav/${recipeId}`, {
            method: "POST"
        })
        if(response.ok){
            return await response.json();
        }
    }catch(e){
        console.log(e)
    }
}

export async function deletFromFav(recipeId, userId) {
    try{
        const response = await fetch(`http://localhost:8080/api/user/${userId}/removeFav/${recipeId}`,{
            method: "POST"
        })
        if(response.ok){
            return await response.json();
        }
    }catch(e){
        console.log(e)
    }
}