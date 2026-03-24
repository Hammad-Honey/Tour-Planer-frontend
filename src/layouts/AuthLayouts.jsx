import { Routes, Route, Outlet, Navigate, Link, } from "react-router-dom";
import AuthRoutes from "../routes/AuthRoutes";
import { Fragment } from "react";

function AuthLayout() {
    const getRoutes = (route) => {
        return route.map((prop, key) => {
            if (prop.layout === "auth") {
                return (
                    <Route
                        path={prop.path}
                        element={prop.component}
                        key={key}
                    />
                );
            }
            return null;
        });
    };


console.log("Auth Layout running")
return (
    <>
        <h1>Auth Layout</h1>
        {getLinks(AuthRoutes)}
        <Routes>
            {getRoutes(AuthRoutes)}
        </Routes>
    </>

)
}

export default AuthLayout;