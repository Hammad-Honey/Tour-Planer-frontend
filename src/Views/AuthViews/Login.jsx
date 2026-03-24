import { FaEye, FaEyeSlash } from "react-icons/fa"
import { Formik, useFormik } from "formik";
import { loginUser } from "../../../APIs/auth";


function Login() {
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
        onSubmit:async (values)=>{
            console.log("form Data", values);
            console.log("Login parms",values)
            const data= await loginUser(values)
            if(data.user){
                console.log("first if data: ",data)
                {localStorage.setItem("user",JSON.stringify(data.user));}

            }else{
                
                console.log("login", data)
            }


        }
    })
    return (
        <>
        <div className="loginPage">
            <div className="LoginContainer">
                <div className="formDiv">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="uname">
                            <div className="labelGroup"></div>
                            <label>Email / Username</label><span>{formik.errors.emailOrUname}</span>
                            <input type='text' name="emailOrUname" value={formik.values.emailOrUname} onChange={formik.handleChange}
                                className="border-1"
                            />
                            <input type='password' name="password" value={formik.values.password} onChange={formik.handleChange}
                                className="border-1"
                            />
                            <button type="submit" >Submit Button    </button><span>{formik.errors.emailOrUname}</span>


                        </div>
                        <div>

                        </div>
                    </form>

                </div>

            </div>

        </div>
        </>
    )
}

export default Login

