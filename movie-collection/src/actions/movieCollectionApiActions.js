import * as types from './actionTypes';
import axios from 'axios';

var axiosInstance = axios.create({
    baseURL: 'http://localhost:5381/api/movies'
});

export function getMoviesSuccess(movies) {
    debugger;
    return { type: types.GET_MOVIES_SUCCESS, movies };
}

export function getMovieSuccess(movie) {
    return { type: types.GET_MOVIE_SUCCESS, movie };
}

export function addMovieSuccess(movie) {
    return { type: types.ADD_MOVIE_SUCCESS, movie };
}

export function updateMovieSuccess(movie) {
    return { type: types.UPDATE_MOVIE_SUCCESS, movie };
}

export function deleteMovieSuccess(movie) {
    return { type: types.DELETE_MOVIE_SUCCESS, movie };
}

export function getMovies() {
    debugger;
    return function(dispatch) {
        axiosInstance.get()
        .then(({response}) => {
            debugger;
            dispatch(getMoviesSuccess(response.data))
        }).catch(error => {
            throw(error);
        });
    };
}