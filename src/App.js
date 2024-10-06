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

function App() {
  return (

    // <>
    //   <div className="Container App">
    //       <NavHeader />
    //       <Content />
    //       <Footer />
    //   </div>
    // </>

    <Router>
      <div>
        {/* Navigation Links */}
        {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>

            </ul>
          </nav> */}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotdeals" element={<HotDealsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/food" element={<FoodInfoPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<h2>404 Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>


  );
}

export default App;
