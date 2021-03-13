import React, {useState} from "react";
import './CustomCard.css';

export default function CustomCard({movie,id}){

    const [toggle, setToggle] = useState(false);
    function collapse(){
        setToggle(!toggle);
    }

    return(
        <div className="card">
            <img className="card--image"
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            onClick={collapse}
            alt={movie.title + ' poster'}
            />
            {toggle ? (
                <div className={"card--content"}>
                    <h3 className="card--title">{movie.title}</h3>
                    <p className="card--releaseDate">Release date: {movie.release_date}</p>
                    <p className="card--rating">Rating: {movie.vote_average}</p>
                    <p className="card--desc">{movie.overview}</p>
                </div>
            ) : null}
        </div>
    )
}