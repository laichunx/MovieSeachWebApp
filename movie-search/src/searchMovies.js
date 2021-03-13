import React, {useState} from "react";
import CustomCard from "./components/CustomCard"

export default function SearchMovies(){

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const search = async (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=916671b5d10c6031808c69f06c770e69&language=en-US&query=${query}&page=1&include_adult=false`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }

    return(
        <div>
            <form className="form" onSubmit={search}>
                <label className="label" htmlFor="query" >Movie Name</label>
                <input className="input" type="text" name="query" placeholder="Alice in Wonderland"
                    value={query} onChange={(e) => setQuery(e.target.value)}></input>
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <CustomCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}