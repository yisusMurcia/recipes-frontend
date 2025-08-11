export async function getFoodTypes(){
    try {
        const response = await fetch('http://localhost:8080/api/food-types');
        if(response.ok){
            return await response.json();
        }
    } catch (error) {
        console.log(error)
    }
}

export async function getFoodIntentions() {
    try {
        const response = await fetch('http://localhost:8080/api/food-intentions');
        if(response.ok){
            return await response.json()
        }
    } catch (error) {
        console.log(error)
    }
}