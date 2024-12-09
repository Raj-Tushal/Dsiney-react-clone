import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import DetailPage from "./components/Detail.jsx";
import ContextStore from "./components/Context Store/Store.jsx";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
function App() {
  return (
    <div className="w-full h-screen">
    <ContextStore>
    <BrowserRouter>
        <Routes>

          {/* Home Page */}
          <Route
            path="/home"
            element={
              <>
                <Header isHomePage={true} />
                <Home />
              </>
            }
          />
          
          {/* LoginPage */}
          <Route path="/" element={<Login />} key="login" />

          {/* DetailPage */}
         <Route path="/detailPage/:specificIndex" element={<DetailPage />} /> 
        </Routes>
      </BrowserRouter>
    </ContextStore>
    </div>
  );
}

export default App;
