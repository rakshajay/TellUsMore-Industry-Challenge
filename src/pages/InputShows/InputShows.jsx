import "./InputShows.scss";
import { useState } from "react";
import ShowDetails from "../../Components/ShowDetails/ShowDetails";
import showsApi from "../../../back-end-utils/api";
import { tabulateNetworks } from "../../../back-end-utils/genres";
import { getShowByGenre } from "../../../back-end-utils/genres";
import "../../App.scss";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import rightArrow from '../../assets/right-arrow.png';

function InputShows() {
    const location = useLocation();
    const { selectedGenres } = location.state;
    const [isModalOpen, setModalOpen] = useState(false);
    let showsApiObj = new showsApi();
    const [allShows, setAllShows] = useState([]);
    const [showsArray, setShowsArray] = useState([]);
    const [selectedShows, setSelectedShows] = useState([]);
    const [showsByGenre, setShowsByGenre] = useState([]);
    const [modal, setModal] = useState({});
    const navigate = useNavigate();

    let networkCount = {};
    let appNetworksArray = [];

    async function fetchShows() {
        try {
            let allShows = await showsApiObj.getAllShows();
            setAllShows(allShows);
            const genreShows = getShowByGenre(selectedGenres[0], allShows);
            setShowsArray(genreShows);
        } 
        
        catch (error) {
            console.error("Error fetching shows:", error);
        }
    }

    useEffect(() => {
        fetchShows();
    }, [selectedGenres, showsByGenre]);

    const openModal = (show) => {
        setModalOpen(true);
        setModal(show);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    function selectShow(event) {
        const clickedShow = event.target.id;
        setSelectedShows([...selectedShows, clickedShow]);
    }

    function getNetworks() {
        appNetworksArray = tabulateNetworks(selectedShows, allShows);

        for (let i = 0; i < appNetworksArray.length; i++) {
            if (networkCount.hasOwnProperty(appNetworksArray[i])) {
                networkCount[appNetworksArray[i]] += 1;
            } 
            
            else {
                networkCount[appNetworksArray[i]] = 1;
            }
        }
        localStorage.setItem("networks", JSON.stringify(networkCount));
    }

    function nextGenre() {
        if (selectedGenres.length > 1) {
            selectedGenres.shift();
            fetchShows();
        }

        else {
            navigate("/recommended");
        }
    }

    function spliceDescription(str) {
        let strArr = str.split("")
        strArr.splice(0,3);
        strArr = strArr.slice(0,-4);
        return strArr;
    }

    return (
        <>
            <h1 className="pick">Pick Your Top 3 Shows For {selectedGenres[0]}</h1>

            <div className="showTiles">
                {showsArray.map((show) => {
                return (
                    <article key={show.id} className="showTiles__tile">
                    <div onClick={() => openModal(show)}>
                        <p className="showName">
                        {show.name} on {show.network.name}
                        </p>
                        <p className="showRating">
                        Average Rating: {show.rating.average}/10
                        </p>
                    </div>

                    <img
                        className={`showImg ${selectedShows.includes(show.id.toString()) ? "showImg--clicked" : ""}`}
                        src={show.image.medium}
                        alt={show.name}
                        onClick={selectShow}
                        id={`${show.id}`}
                    />

                    </article>
                );
                })}
            </div>

            <div className="buttonsDiv">
                <button onClick={getNetworks}>Save {selectedGenres[0]} Show Selections</button>
                <button className="nextBtn" onClick={nextGenre}>
                <img className="arrowIcon" src={rightArrow} />
                </button>
            </div>

            {isModalOpen && (
                <ShowDetails
                name={modal.name}
                summary={spliceDescription(modal.summary)}
                rating={modal.rating.average}
                image={modal.image.medium}
                closeModal={closeModal}
                />
            )}
        </>
    );
}

export default InputShows;
