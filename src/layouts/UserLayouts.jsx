import { Routes, Route } from "react-router-dom";
import UserRoutes from "../routes/UserRoutes";

function UserLayout() {

    const getRoutes = (route) => {
        return route.map((prop, key) => {
            if (prop.layout === "user") {
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


    console.log("User Layout running")
    return (
        <>


            <Routes>
                {getRoutes(UserRoutes)}
            </Routes>
        </>

    )
}

export default UserLayout;