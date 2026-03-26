import Login from "../Views/AuthViews/Login";
import Signup from "../Views/AuthViews/Signup";
import ResetPassword from "../Views/AuthViews/ResetPassowrd";

const AuthRoutes = [
    {
        path: "login",
        name: "Login Page",
        component: <Login />,
        layout: "auth"
    },
    {
        path: "signup",
        name: "Signup Page",
        component: <Signup />,
        layout: "auth"
    },
    {
        path:'reset-password',
        name:"Reset Password",
        component: <ResetPassword/>
    }

]
export default AuthRoutes;