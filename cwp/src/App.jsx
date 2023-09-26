import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import MakeAppointment from "./components/Appointment/MakeAppointment/MakeAppointment";
import "./App.css";
import LoginPage from "./components/Login/LoginPage/LoginPage";
import { createContext, useState } from "react";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <>
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/appointment"
              element={
                <PrivateRoute>
                  <MakeAppointment></MakeAppointment>
                </PrivateRoute>
              }
            ></Route>
            <Route path="/login" element={
                <LoginPage></LoginPage>
            } />
            <Route path='/dashboard' element={<Dashboard></Dashboard>}/>
          </Routes>
        </Router>
      </userContext.Provider>
    </>
  );
}

export default App;
