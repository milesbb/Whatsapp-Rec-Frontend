import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/loginsignup/Login";
import NavbarComp from "./components/Navbar/NavbarComp";
import Footer from "./components/Footer";
import { useState } from "react";
import SignUp from "./components/loginsignup/SignUp";
import Home from "./components/Home/Home";
import ChatMain from "./components/ChatMain/ChatMain";
import Search from "./components/Search/Search";
import ProfileSettings from "./components/ProfileSettings/ProfileSettings";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComp loggedIn={loggedIn} />

        <Routes>
          <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<ChatMain />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<ProfileSettings />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
