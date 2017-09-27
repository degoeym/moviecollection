import React from 'react';

const MovieDetails = ({movie, onClick}) => {
    debugger;
    var rating = "";
    switch (movie.rating) {
        case 1:
            rating = "G";
            break;
        case 2:
            rating = "PG";
            break;        
        case 3:
            rating = "PG-13";
            break;
        case 4:
            rating = "R";
            break;
        case 5:
            rating = "NC-17";
            break;
        case 6:
            rating = "X";
            break;
        default:
            rating = "N/R";
            break;
    }
    
    var releaseDate = new Date(movie.releaseDate);
    var inventoryDate = new Date(movie.inventoryDate);
    
    return (
        <div>
            <h1>{movie.title}</h1>
            <h2>{movie.description}</h2>
            <p>Rated {rating}</p>
            <p>Release date: {`${releaseDate.getMonth()+1}/${releaseDate.getDate()}/${releaseDate.getFullYear()}`}</p>
            <p>Added to collection: {`${inventoryDate.getMonth()+1}/${inventoryDate.getDate()}/${inventoryDate.getFullYear()}`}</p>
            <input type='button' value='Back to Collection' className='btn btn-primary' onClick={onClick}/>
        </div>
    )
}

export default MovieDetails;