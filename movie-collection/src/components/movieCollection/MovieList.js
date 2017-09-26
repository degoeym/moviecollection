import React from 'react';
import MovieListRow from './MovieListRow';

const MovieList = ({movies}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Rating</th>
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