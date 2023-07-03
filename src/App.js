import "./App.css";
import Header from "./components/Loyout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddMeals from "./components/Meals/MealItem/AddMeals";
import LoginPage from "./accounts/LoginPage";
import PrivateAdminRoute from "./utils/PrivateAdminRoutes";
import RegisterPage from "./accounts/RegisterPage";
import Footer from "./components/Loyout/Footer/Footer";
import Contactus from "./components/ContactUs/Contactus";
import Checkout from "./components/Cart/Checkout";
import ResetPassword from "./accounts/ResetPassword";
import Feedbacks from "./components/ContactUs/Feedbacks";
import AuthContext from "./store/AuthContext";
import MealDetails from "./components/Meals/MealItem/MealDetails";

function App() {
  const { cartIsShown, showCartHandler, hideCartHandler } =
    useContext(AuthContext);
  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Routes>
          <Route path="/" element={<Meals />} />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<RegisterPage />} path="/signup" />
          <Route element={<Contactus />} path="/contact-us" />
          <Route element={<Feedbacks />} path="/feedbacks" />
          <Route element={<MealDetails/>} path="/meals-item/:id"/>
          <Route
            element={<Checkout />}
            path="/checkout"
          />
          <Route element={<ResetPassword />} path="/reset-password" />
          <Route
            path="/menu"
            element={
              <PrivateAdminRoute>
                <AddMeals />
              </PrivateAdminRoute>
            }
          />
          <Route path="*" element={<p>No Page Found</p>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
