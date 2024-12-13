import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import DetailPage from "./components/Detail.jsx";
import ContextStore from "./components/Context Store/Store.jsx";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import { ProtectedRoutes } from "./utils/ProtectedRoutes.jsx";
function App() {
  return (
    <div className="w-full h-screen">
    <ContextStore>
    <BrowserRouter>
        <Routes>


   {/* LoginPage */}
   <Route path="/" element={<Login />} key="login" />

         <Route element={<ProtectedRoutes/>}>
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
          
          {/* DetailPage */}
         <Route path="/detailPage/:specificIndex" element={<DetailPage />} /> 

         </Route>
        </Routes>
      </BrowserRouter>
    </ContextStore>
    </div>
  );
}

export default App;
