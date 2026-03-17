import { useState, useEffect, useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


function Signup() {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", userName: "", email: "", password: "" })
    const [showpassword, setShowPassword] = useState(false)
    const [formErr, setFormErr] = useState({})
    const debounceRef = useRef(null)


    useEffect(() => {
        console.log("Updated form data:", formData)
    }, [formData])

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value.trim()}))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({ firstName: "", lastName: "", userName: "", email: "", password: "" })
    }





    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="w-full max-w-120 p-2 mx-auto bg-zinc-100 drop-shadow-lg rounded-md ">
                    <h1 className="p-4 text-center text-xl font-medium">User Signup Page</h1>
                    <div className="p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="flex gap-5">
                                <div className="my-2 w-1/2">
                                    <div>
                                        <label className="flex justify-between">
                                            First Name
                                            <span className=""></span>
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            value={formData.firstName}
                                            type="text"
                                            required
                                            name="firstName"
                                            onChange={handlechange}
                                            className="w-full p-2 rounded-md bg-white drop-shadow-xl"
                                        />
                                    </div>
                                </div>

                                <div className="my-2 w-1/2">
                                    <div>
                                        <label className="flex justify-between">
                                            Last Name
                                            <span className=""></span>
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            className="w-full p-2 rounded-md bg-white drop-shadow-xl"
                                            required
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
                                        <p>Username</p>
                                        {formErr.userName ? <span className="text-xs bg-yellow-400 rounded-xl px-3 content-center">{formErr.userName}</span> : null}
                                    </label>
                                </div>
                                <div>
                                    <input
                                        className="w-full p-2 rounded-md bg-white drop-shadow-xl"
                                        required
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
                                        Email
                                        <span className=""></span>
                                    </label>
                                </div>
                                <div>
                                    <input
                                        className="w-full p-2 rounded-md bg-white drop-shadow-xl"
                                        required
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
                                        Password
                                        <span className=""></span>
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        id="pas-1"
                                        className="w-full p-2 pr-12 rounded-md bg-white drop-shadow-xl"
                                        type={showpassword ? "text" : "password"}
                                        name="password"
                                        required
                                        minLength={8}
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