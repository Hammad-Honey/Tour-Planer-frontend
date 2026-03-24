
const baseUrl = import.meta.env.VITE_BASE_URL
export async function loginUser(formData) {
    try {
        const res = await fetch(`${baseUrl}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
            credentials: "include"

        });
        const json = await res.json();
        if (!res.ok) {
            console.log("res", json)
            throw new Error(res.message || "login Failed")
        }

        const data = await res.json()
        console.log("data from server", data)

        return data;
    } catch (error) {
        return {
            success:false,
            message:error.message,
    
        }

    }
}

export async function signupUser(formData) {

    try {
        const res = await fetch(`${baseUrl}/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),

        });

        const data=await res.json();

        if(!res.ok){
            throw new Error(data.message || "Signup Failed")
        }
        console.log("data from server", data)
        return data;
        
    } catch (error) {
        return {
            success:false,
            message:error.message,
            
        }

    }



}