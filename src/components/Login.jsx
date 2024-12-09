import React, { useState, useEffect,useContext } from 'react';
import myContext from "./Context Store/MyContext";
import { useNavigate } from 'react-router-dom'; 
import Header from './Header';
import loginPageBackground from '../assets/login-background.jpg';
import logo from '../assets/logo.png';
import hulu from '../assets/hulu.png';
import espn from '../assets/espn+.png';
import loginLogoBar from '../assets/cta-logo-two.png';
import { auth, signInWithGooglePopup } from '../utils';
function Login() {
  const { dispatch } = useContext(myContext);
  const navigate = useNavigate();

  // firebase auth function
  const logGoogleUser = async () => {
    try {
      const response = await signInWithGooglePopup();
      console.log("Response:", response);
    // dispatch({ type: 'SET_USER', payload: response.user.photoURL });
      if (response?.user?.photoURL) {
        setTimeout(() => navigate('/home'), 500); 
      } else {
        alert('Authentication failed! Please try again.');
      }
    } catch (error) {
      console.error('Error during Google Sign-In:', error);
    }
  };

  useEffect(()=>{
    auth.onAuthStateChanged((userData)=>{
      console.log(userData,"==>use data")
      if(userData?.email)
       {
        navigate('/home')
        dispatch({ type: 'SET_USER', payload: userData.photoURL });  
       }
    })
  })
  

  return (
    <div>
      <Header isLoginPage={true}  />
      <div
        className="w-full h-screen bg-cover bg-center flex justify-center items-center
        max-sm:bg-gray-500"
        style={{ backgroundImage: `url(${loginPageBackground})` }}
      >
        <div className="w-[45%] max-sm:w-[100%] max-sm:h-full h-1/2 p-2 flex flex-col justify-center gap-3 
        max-sm:flex max-sm:items-center max-sm:justify-start max-sm:pt-5 max-sm:px-8 ">
          {/* top */}
          <div className="w-full h-1/3 flex justify-center gap-8 p-2
          max-sm:flex-col max-sm:h-fit max-sm:items-center max-sm:gap-0">
            <img src={hulu} className="max-sm:size-9/12" alt="" />
            <img src={logo} className="max-sm:size-9/12" alt="" />
            <img src={espn} className="max-sm:size-9/12" alt="" />
          </div>

          {/* mid */}
          <div className="w-full h-1/3 flex items-center flex-col gap-2 max-sm:h-fit max-sm:py-4 max-sm:gap-4">
            <button
              className="w-full text-sm rounded-lg tracking-widest bg-[#065ee5] h-1/2 text-white font-bold
              max-sm:h-fit max-sm:py-4"
              onClick={logGoogleUser}
            >
              GET ALL THERE
            </button>
            <p className="text-center text-xs text-white px-2
              max-sm:w-fit max-sm:hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat quaerat eveniet praesentium, omnis rerum! Sequi
              expedita eum, quae molestiae earum ut modi reprehenderit id exercitationem fugit officia
            </p>
          </div>

          {/* bottom */}
          <img src={loginLogoBar} alt="" className="px-8 max-sm:h-7 max-sm:px-0 max-sm:w-full" />
        </div>
      </div>
    </div>
  );
}

export default Login;
