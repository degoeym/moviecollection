import React, {PropTypes} from 'react';
import MovieListRow from './MovieListRow';

const MovieList = ({movies}) => {
    debugger;
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Rating</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {movies.map(movie => 
                    <MovieListRow key={movie.id} movie={movie} />
                )}
            </tbody>
        </table>
    );
};

export default MovieList;