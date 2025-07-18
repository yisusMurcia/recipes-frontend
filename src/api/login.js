export default async function LoginUser(loginDto){
    try {
        const response = await fetch("http://localhost:8080/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginDto)
        })
        if (response.ok) {
            return await response.json()
        } else {
            alert("Usuario o contraseña incorrecto");
        }
    } catch (e) {
        console.log(e)
    }
}