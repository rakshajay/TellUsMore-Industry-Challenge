const genreList = [
    "Action",
    "Adventure",
    "Crime",
    "Drama",
    "Fantasy",
    "Romance",
    "Science-Fiction",
    "Thriller",
];


function getShowByGenre(genre, allShowsArray) {
    let showsOfGenre = allShowsArray.filter((show) => {
        return show.genres.includes(genre);
    });

    showsOfGenre.sort((a, b) => b.rating.average - a.rating.average);
    return showsOfGenre.slice(0, 8); // returns top 8 rated
}

function tabulateNetworks(chosenShows, allShows) {
    let networksArray = [];

    for (let i = 0; i < allShows.length; i++) {
        for (let j = 0; j < chosenShows.length; j++) {
        if (allShows[i].id == chosenShows[j]) {
            networksArray.push(allShows[i].network.name);
        }
        }
    }

    return networksArray;
}

export default genreList;
export { getShowByGenre, tabulateNetworks };
