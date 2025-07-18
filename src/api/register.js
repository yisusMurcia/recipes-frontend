export default async function RegisterUser(registerDto) {
    const response = await fetch("http://localhost:8080/api/user/create-user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(registerDto)
    });
    if (response.ok) {
        return await response.json();
    } else {
        alert("Error al registrar usuario");
    }
}