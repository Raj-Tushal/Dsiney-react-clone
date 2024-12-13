import { Outlet, Navigate } from "react-router-dom";
import myContext from "../components/Context Store/MyContext";
import { useContext } from "react";

export function ProtectedRoutes() {
  const { state } = useContext(myContext); // Accessing context
  console.log(state.isUserVarified, "==>isUserVarified");

  const user = state.isUserVarified; // Example: use this variable for user check

  // Redirect to loginPage if user is not verified
  return user ? <Outlet /> : <Navigate to="/" />;
}
