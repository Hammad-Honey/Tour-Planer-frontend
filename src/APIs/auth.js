
export async function loginUser(formData) {
    const baseUrl = import.meta.env.VITE_BASE_URL
    console.log("baseUrl", baseUrl)
    try {
        const res = await fetch(`${baseUrl}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
            credentials: "include"

        });
        const data = await res.json()
        console.log("data from server", data)
        if (!res.ok) {
            throw new Error(data.message || "login Failed")
        }
        return data;
    } catch (error) {
        throw error;

    }
} 

// export async function signupUser(formData){
//     const baseUrl = import.meta.env.BASE_URL

//     try {
//         const req=





//     } catch (error) {
        
//     }



// }