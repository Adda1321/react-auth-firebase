import React from "react";
import SignUp from "./SignUp";
import { AuthProvider } from "../context/AuthContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import CustomContainer from "./Container";
import CustomNavbar from "../NavBar/Navbar";
import { Products } from "../Products/Products";
import FeaturedProducts from "../Products/FeaturedProducts";
import NewProducts from "../Products/NewProducts";
import FireGram from "../FireGram/index";
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<FireGram />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<CustomNavbar />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/update-profile" element={<UpdateProfile />} />

            {/* nested routes  */}
            <Route path="products" element={<Products />}>
              <Route index element={<FeaturedProducts />} />
              <Route path="featured" element={<FeaturedProducts />} />
              <Route path="new" element={<NewProducts />} />
            </Route>
          </Route>
        </Route>

        <Route element={<CustomContainer />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
