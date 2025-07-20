export default async function RegisterUser(registerDto) {
    try{
        const response = await fetch("http://localhost:8080/api/user/create-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(registerDto)
        });
        if (!response.ok) {
            return response.text().then(texto => {
            console.error('Error del servidor:', texto); // Aquí verás "Username already exists"
            alert(texto); // Puedes mostrarlo al usuario
            });
        }else{
            return await response.json();
        }
    }catch (e) {
        alert(e);
    }
}