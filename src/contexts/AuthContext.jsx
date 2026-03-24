import { createContext, useContext, useState } from "react";

const AuthContext = createContext();


export function AuthProvider({ children }) {
    const [user, setUser] = useState({id:"",name:"",email:"",role:""})
    const logedInUser=JSON.parse(localStorage.getItem("user"));
    if(logedInUser){
        setUser({
            id:logedInUser.id,
            name:logedInUser.name,
            email:logedInUser.email,
            role:logedInUser.role,
        })
    }
    const AddUser = (parm) => {
        setUser(parm)
    }

    const logout = () => {
        setUser({id:"",name:"",email:"",role:""});
        localStorage.clear();
    }


    return (
        <AuthContext.Provider value={{ user, AddUser, logout }}>
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