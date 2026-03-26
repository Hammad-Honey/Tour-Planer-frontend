import { Link } from "react-router-dom"
function Header() {
    return (
        <>
            <header className="flex justify-between items-center px-8 py-5 bg-white shadow-sm">
                <h1 className="text-2xl font-semibold text-blue-600">TourPlan</h1>
                <nav className="space-x-6 text-gray-600 font-medium">
                    <Link to="/">Home</Link>
                    <Link to="/auth/signup">Signup</Link>
                    <Link to="/auth/login">Login</Link>
                </nav>
            </header>
        </>
    )
}
export default Header