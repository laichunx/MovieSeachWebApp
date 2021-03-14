import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

export default function SearchMovies(){

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const search = async (e) => {
        e.preventDefault();
        if(query!==''){
            const url = `https://api.themoviedb.org/3/search/movie?api_key=916671b5d10c6031808c69f06c770e69&language=en-US&query=${query}&page=1&include_adult=false`;
            try{
                const res = await fetch(url);
                const data = await res.json();
                setMovies(data.results);
                console.log(movies);
            }catch(err){
                console.error(err);
            }
        }
    }

    return(
        <div>
            <form className="form mb-5" onSubmit={search}>
                <input className="input" type="text" name="query" placeholder="Alice in Wonderland"
                    value={query} onChange={(e) => setQuery(e.target.value)}></input>
                <button className="button" type="submit">Search</button>
            </form>
            <CardColumns>
                {movies.filter(movie => movie.poster_path).map(movie => (
                        <Card className="mb-2 w-75 card" key={movie.id}>
                            <Card.Img
                                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                                alt={`${movie.title} +  poster`}
                            />
                            <Card.Body>
                                <Card.Title>
                                    <h3>{movie.title}</h3>
                                </Card.Title>
                                <Card.Text>
                                    <p>Rating: {movie.vote_average === 0 ? `No Rating` : movie.vote_average}</p>
                                    <p>Release Date: {movie.release_date}</p>
                                    <p>{movie.overview}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                ))}
            </CardColumns>
        </div>
    )
}