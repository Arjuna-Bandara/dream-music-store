import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import HotDealsPage from "../HotDealsPage/HotDealsPage";
import AboutPage from "../AboutPage/AboutPage";
import FoodInfoPage from "../FoodInfoPage/FoodInfo";


function HomeRouter() {
    return (
        <>
            <Router>
                <div>

                    {/* Routes */}
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/hotdeals" element={<HotDealsPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/food" element={<FoodInfoPage />} />
                        <Route path="*" element={<h2>404 Page Not Found</h2>} />
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default HomeRouter;