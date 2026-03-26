import { useSelector, useDispatch } from "react-redux";
import { login } from '../../store/slices/authSlice'
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { Formik, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


function Login() {
    const navigate=useNavigate();
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            emailOrUname: "",
            password: ""

        },
        validate: (values) => {
            const errors = {}

            if (!values.emailOrUname) {
                errors.emailOrUname = "Enter User Name"
            }
            if (!values.password) {
                errors.password = "Enter Passowrd"
            }
            // else if(!/[#$!%^&*_+\-=\[\]{}|\\:;"'<>,.?/`]/.test(values.password)){
            //     console.log("Didn't mactch the inputs require")
            // }
            return errors
        },
        onSubmit: async (values) => {
            try {
                const user = await dispatch(login(values)).unwrap();
                console.log("api runs output:", user);
                toast.success("Login successful!");
                navigate("/user/map");
            } catch (error) {
                toast.error("Login Failed");
            }
        }
    })
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="w-full max-w-120 p-2 mx-auto bg-zinc-100 drop-shadow-lg rounded-md">
                    <h1 className="p-4 text-center text-xl font-medium">User Login</h1>
                    <div className="p-4">
                        <form onSubmit={formik.handleSubmit}>

                            <div className="my-2">
                                <div className="flex justify-between">
                                    <label className="">Email / Username</label><span className="text-xs text-yellow-400 rounded-sm px-3 content-center">{formik.errors.emailOrUname}</span>
                                </div>
                                <div>
                                    <input type='text' name="emailOrUname" value={formik.values.emailOrUname} onChange={formik.handleChange}
                                        className="w-full p-2 rounded-md bg-white drop-shadow-xl"
                                    />
                                </div>
                            </div>
                            <div className="my-2">
                                <div className="flex justify-between">
                                    <label>Password</label><span className="text-xs text-yellow-400 rounded-sm px-3 content-center">{formik.errors.password}</span>
                                </div>
                                <div>
                                    <input type='password' name="password" value={formik.values.password} onChange={formik.handleChange}
                                        className="w-full p-2 rounded-md bg-white drop-shadow-xl"
                                    />
                                </div>

                            </div>
                            <div className="my-2">
                                <button type="submit"
                                    className="w-full bg-black p-2 rounded-md text-white"
                                >Submit Button</button>
                            </div>

                        </form>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Login

