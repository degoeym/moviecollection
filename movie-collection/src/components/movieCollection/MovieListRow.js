<<<<<<< HEAD
import React from 'react';
//import {Link} from 'react-router';
=======
import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
>>>>>>> 0fccf90ad524e215ed723a83e74cb44dcbf6b114

const MovieListRow = ({movie}) => {
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

    return (
        <tr>
            <td>{movie.title}</td>
            <td>{movie.description}</td>
            <td>{rating}</td>
            <td><Link to={`/movieCollection/${movie.id}`}>Details</Link></td>
            <td><Link to={`/movieCollection/edit/${movie.id}`}>Edit</Link></td>
        </tr>
    );
};

export default MovieListRow;