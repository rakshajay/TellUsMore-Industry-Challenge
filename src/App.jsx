import InputGenre from "./pages/InputGenre/InputGenre";
import InputShows from "./pages/InputShows/InputShows";
import RecommendationPage from "./pages/RecommendationPage/RecommendationPage";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<InputGenre />} />
                    <Route path="/input-shows" element={<InputShows />} />
                    <Route path="/recommended" element={<RecommendationPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App;
