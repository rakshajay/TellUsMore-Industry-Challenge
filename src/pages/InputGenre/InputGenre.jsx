import "./InputGenre.scss";
import "../../App.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import genreList from "../../../back-end-utils/genres.js";

function InputGenre() {
    const [selectedGenres, setSelectedGenres] = useState([]);
    const navigate = useNavigate();

    const handleGenreChange = (e) => {
        const genre = e.target.value;
        if (e.target.checked) {
            if (selectedGenres.length < 3) {
                setSelectedGenres([...selectedGenres, genre]);
            } 
            
            else {
                alert("Please select only 3 genres.");
                e.target.checked = false;
            }
        } 
            
        else {
            setSelectedGenres(selectedGenres.filter((g) => g !== genre));
        }
    };

    const handleSubmit = () => {
        if (selectedGenres.length !== 3) {
            alert("Please select exactly 3 genres.");
        } 
        
        else {
            console.log("Selected genres: ", selectedGenres);

            navigate("/input-shows", {
                state: { selectedGenres, currentGenreIndex: 0 },
            });
        }
    };

    localStorage.setItem("selected genres", selectedGenres);

    return (
        <div className="content">
            <h1 className="genreinput__title">Welcome, you're on your way to the perfect channel package</h1>
            <h2 className="genreinput__subheading">
                TELUS more, what are your top genres?
            </h2>

            <div className="homepage__genres">
                {/* <h3>Select your top 3 genres</h3> */}
                <form className="form">
                {genreList.map((genre) => (
                    <div key={genre} className="genre-option">
                        <input
                            className="box"
                            type="checkbox"
                            value={genre}
                            onChange={handleGenreChange}
                        />
                        <label className="labels">{genre}</label>
                    </div>
                ))}
                </form>
            </div>

            <button onClick={handleSubmit} className="genreinput-submit-btn">
                Next
            </button>
        </div>
    );
}

export default InputGenre;
