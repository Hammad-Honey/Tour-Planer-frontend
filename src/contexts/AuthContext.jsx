import { createContext, useContext, useState } from "react";

const AuthContext = createContext();


export function AuthProvider({ children }) {
    const [user, setUser] = useState({
        name: '',
        city: '',
        location: {
            lat: 0,
            lng: 0
        }

    })

    const AddUser = (parm) => {
        setUser(parm)
    }

    const logout = () => {
        setUser({
            name: '',
            city: '',
            location: {
                lat: 0,
                lng: 0
            }
        })
    }


    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>

    )

}

export function useAuth() {
    const context = useContext(AuthContext);
    if(!context)
    {
        throw new Error("Must Use Within AuthProvider")
    }
    return context;
}