import Contact from "./userlogin/Contact";
// import About from "./userlogin/About";
// import Home from "./userlogin/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/Navbar';
import "./App.css";
import Login from "./userlogin/Login";
import Forget from "./userlogin/Forget";
import SignUp from "./userlogin/Signup";
import ResetPassword from "./userlogin/ResetPassword";
// import Update from "./userlogin/Update";
import UserDetail from "./userlogin/UserDetail";
import AdminHome from "./AdminHome";
import AddExpenseForm from './components/AddExpenseForm';
// import Content from './Content';
import Report from './components/Report';
import Transactions from './components/Transactions';
import Help from './components/Help';
import Update from "./userlogin/Update";
// import Settings from './components/Settings';
// import { Settings } from "lucide-react";


const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar /> */}

    
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          {/* <Route path="/About" element={<About />} /> */}
          <Route path="/Forget" element={<Forget />} />
          <Route path="/reset_password/:id/:token" element={<ResetPassword />} />
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="/Update" element={<Settings />} /> */}
          <Route path="/UserDetail" element={<UserDetail />} />
          <Route exact path="/AdminHome" element={<AdminHome  />} />

          <Route exact path="/Dashboard" element={<AdminHome  />} />
        <Route exact path="/Budgets" element={<AddExpenseForm />} />
        <Route exact path="/Reports" element={<Report />} />
        <Route exact path="/Transactions" element={<Transactions />} />
        <Route exact path="/Settings" element={<Update />} />
        <Route exact path="/Help" element={<Help />} />

        
        </Routes>
 


      </Router>

    </>
  );
};

export default App;
