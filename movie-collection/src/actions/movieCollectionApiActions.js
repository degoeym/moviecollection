import * as types from './actionTypes';
import axios from 'axios';

//var axiosInstance = axios.create({
//    baseURL: 'http://moviecollectionapi20170925.azurewebsites.net'
//});

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
        axios.get('http://moviecollectionapi20170925.azurewebsites.net/api/movies')
        .then(({data}) => {
            debugger;
            dispatch(getMoviesSuccess(data))
        }).catch(error => {
            debugger;
            throw(error);
        });
    };
}