import logo from './logo.svg';
import './App.css';
import NavHeader from './Components/NavHeader/NavHeader';
import Footer from './Components/Footer/Footer';

import { Container } from 'bootstrap/dist/css/bootstrap.min.css';
import Content from './Components/Content/Content';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import HomePage from './Components/HomePage/HomePage';
import AboutPage from './Components/AboutPage/AboutPage';
import FoodInfoPage from './Components/FoodInfoPage/FoodInfo';
import HotDealsPage from './Components/HotDealsPage/HotDealsPage';
import LoginPage from './Components/LoginPage/LoginPage';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import CartPage from './Components/CartPage/CartPage';
import ItemInfoPage from './Components/ItemInfoPage/ItemInfoPage';


function App() {
  return (

    <Router>
      <div>


        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotdeals" element={<HotDealsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/iteminfo" element={<ItemInfoPage />} />
          <Route path="/food" element={<FoodInfoPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<h2>404 Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>


  );
}

export default App;
