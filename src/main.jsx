import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css'
import App from './pages/App.jsx'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import MealDetail from "./pages/MealDetail.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename="/hungry-db">
            <div className="container mx-auto ">

                <Navbar />
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/meal" element={<MealDetail />} />
                </Routes>

            </div>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>,
)
