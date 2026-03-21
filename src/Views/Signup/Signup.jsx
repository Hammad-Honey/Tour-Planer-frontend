import { useState, useEffect, useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


function Signup() {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", userName: "", email: "", password: "" })
    const [showpassword, setShowPassword] = useState(false)
    const [formErr, setFormErr] = useState({})
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?/\\|[\]{}~`])[^\s]+$/;

    useEffect(() => {
        console.log("Updated form data:", formData)
    }, [formData])

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value.trim() }))
        setFormErr((prev) => ({ ...prev, [name]: "" })) // This to remove the warning
    }


    const validate = () => {
        const errors = {};
        const regix = /^[a-zA-Z\s'-]{2,50}$/;
        const emailRegix = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


        if (!formData.firstName) {
            errors.firstName = "Enter firstname";
        } else if (!regix.test(formData.firstName)) {
            errors.firstName = "Invalid format";
        }

        if (!formData.lastName) {
            errors.lastName = "Enter lastname";
        }

        if (!formData.userName) {
            errors.userName = "Enter username";
        }else if (formData.userName.includes("@")){
            errors.userName="Must Not inclues @"
        }

        if (!formData.email) {
            errors.email = "Enter email";
        } else if (!emailRegix.test(formData.email)) {
            errors.email = "Invalid email";
        }

        if (!formData.password) {
            errors.password = "Enter password";
        } else if(formData.password.length<8) {
            errors.password = "Passowrd Must be 8 or more characters";
        } else if (!passwordRegex.test(formData.password)){
            errors.password = "Use: A-Z, a-z, 0-9, and symbols";
        }

        return errors;
    };


    const handleSubmit = (e) => {

        e.preventDefault();
        const errors = validate()
        setFormErr(errors);


        if (Object.keys(errors).length > 0) {
            //And Send Request to API key
            console.log("There are errors in your form", formErr)

        }
        else {
            setFormData({ firstName: "", lastName: "", userName: "", email: "", password: "" })
        }

    }





    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="w-full max-w-120 p-2 mx-auto bg-zinc-100 drop-shadow-lg rounded-md ">
                    <h1 className="p-4 text-center text-xl font-medium">User Signup Page</h1>
                    <div className="p-4">
                        <form onSubmit={handleSubmit} >
                            <div className="flex gap-5">
                                <div className="my-2 w-1/2">
                                    <div>
                                        <label className="flex justify-between">
                                            <p>First Name</p>{formErr.firstName ? <span className="text-xs bg-yellow-400 rounded-sm px-3 content-center">{formErr.firstName}</span> : null}

                                        </label>
                                    </div>
                                    <div>
                                        <input

                                            value={formData.firstName}
                                            type="text"
                                            name="firstName"
                                            onChange={handlechange}
                                            className="w-full p-2 rounded-md bg-white drop-shadow-xl"
                                        />
                                    </div>
                                </div>

                                <div className="my-2 w-1/2">
                                    <div>
                                        <label className="flex justify-between">
                                            <p>Last Name</p>{formErr.lastName ? <span className="text-xs bg-yellow-400 rounded-sm px-3 content-center">{formErr.lastName}</span> : null}
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            className="w-full p-2 rounded-md bg-white drop-shadow-xl"
                                            value={formData.lastName}
                                            type="text"
                                            name="lastName"
                                            onChange={handlechange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="my-2">
                                <div>
                                    <label className="flex justify-between">
                                        <p>Username</p>{formErr.userName ? <span className="text-xs bg-yellow-400 rounded-sm px-3 content-center">{formErr.userName}</span> : null}

                                    </label>
                                </div>
                                <div>
                                    <input
                                        className="w-full p-2 rounded-md bg-white drop-shadow-xl"
                                        type="text"
                                        value={formData.userName}
                                        name="userName"
                                        onChange={handlechange}
                                    />
                                </div>
                            </div>

                            <div className="my-2">
                                <div>
                                    <label className="flex justify-between">
                                        <p>email</p>{formErr.email ? <span className="text-xs bg-yellow-400 rounded-sm px-3 content-center">{formErr.email}</span> : null}

                                    </label>
                                </div>
                                <div>
                                    <input
                                        className="w-full p-2 rounded-md bg-white drop-shadow-xl"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handlechange}
                                    />
                                </div>
                            </div>

                            <div className="my-2">
                                <div>
                                    <label className="flex justify-between">
                                        <p>Password</p>{formErr.password ? <span className="text-xs bg-yellow-400 rounded-sm px-3 content-center">{formErr.password}</span> : null}
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        id="pas-1"
                                        className="w-full p-2 pr-12 rounded-md bg-white drop-shadow-xl"
                                        type={showpassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        autoComplete="new-password"
                                        onChange={handlechange}
                                    />

                                    <button
                                        className="absolute right-3 top-1/2 -translate-y-1/2"
                                        type="button"
                                        onClick={() => setShowPassword(!showpassword)}
                                    >
                                        {showpassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                            </div>

                            <div className="my-2">
                                <div>
                                    <p id="submitStatus"></p>
                                </div>
                                <div>
                                    <button
                                        className="w-full bg-black p-2 rounded-md text-white"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>



        </>
    )
}
export default Signup 