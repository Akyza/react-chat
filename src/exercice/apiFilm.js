const axios = require('axios');
const baseUrl = "http://www.omdbapi.com/?apikey=b502738f&s=matrix";

export function getMovies(){
    axios.get(baseUrl)
        .then((response) => {console.log(response.data);});
}


//ne marche pas sans le app.js correspondant
export const getMovie = async () => {
    const response = await axios.get(baseUrl);
    return getMovie.data.Search.filtre(
        movie => movie.Year > 2002
    ).map(({Title : Year}) => '${Title}' - '${Year}');
}