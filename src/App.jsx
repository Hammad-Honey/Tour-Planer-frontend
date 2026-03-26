import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import { useAuth } from "./contexts/AuthContext";
import AuthLayout from "./layouts/authLayouts";
import UserLayout from './layouts/UserLayouts'
import Homepage from "./Views/Pages/Homepage";
import Header from "./Views/HeaderFooter/Header";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


// import Map from "./components/map/Map";
// import SearchBar from "./components/search/SearchBar";
// import ResultView from "./components/ResultView/ResultView";
// import Counter from "./components/counter";
// import FetchLocations from './components/FetchLocations'


function App() {
  const { user } = useSelector((state) => state.auth)
  console.log("user", user);
  const id = user?.id;
  const name = user?.name;
  const email = user?.email;
  const role = user?.role;
  

  let routes;
  console.log("App.jsx :",user)
  if (!name) {
    routes = (
      <>
        <Route path='/auth/*' element={<AuthLayout />} />
        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </>
    )
  }
  else if (role === "customer") {
    console.log("role running", role)

    routes = (
      <>
        <Route path='/user/*' element={<UserLayout />} />
        <Route path="/*" element={<Navigate to="/user/tourplaner" />} />
      </>
    );
  }
  return (

    <React.Fragment>
      <Header />
      <Routes>
        
        {routes}
        <Route path="/" element={<Homepage />} />
        
      </Routes>
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;


