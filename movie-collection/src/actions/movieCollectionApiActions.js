import * as types from './actionTypes';
import axios from 'axios';

<<<<<<< HEAD
//var axiosInstance = axios.create({
//    baseURL: 'http://moviecollectionapi20170925.azurewebsites.net'
//});
=======
var axiosInstance = axios.create({
    baseURL: 'http://moviecollectionapi20170925.azurewebsites.net'
});
>>>>>>> 0fccf90ad524e215ed723a83e74cb44dcbf6b114

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
<<<<<<< HEAD
        axios.get('http://moviecollectionapi20170925.azurewebsites.net/api/movies')
        .then(({data}) => {
            debugger;
            dispatch(getMoviesSuccess(data))
=======
        axiosInstance.get('/api/movies')
        .then(({data}) => {
            debugger;
            dispatch(getMoviesSuccess(data));
        }).catch(error => {
            debugger;
            throw(error);
        });
    };
}

export function getMovie(id) {
    return function(dispatch) {
        axiosInstance.get(`/api/movies/${id}`)
        .then(({data}) => {
            dispatch(getMovieSuccess(data));
>>>>>>> 0fccf90ad524e215ed723a83e74cb44dcbf6b114
        }).catch(error => {
            debugger;
            throw(error);
        });
    };
}

export function addMovie(movie) {
    return function(dispatch) {
        return axiosInstance.post('/api/movies', {
            title: movie.title,
            description: movie.description,
            rating: movie.rating,
            releaseDate: movie.releaseDate
        })
            .then(({data}) => {
                debugger;
                dispatch(addMovieSuccess(data));
            }).catch(error => {
                throw(error);
            });
    };
}

export function updateMovie(movie) {
    return function(dispatch) {
        return axiosInstance.put(`/api/movies/${movie.id}`, {
                title: movie.title,
                description: movie.description,
                rating: movie.rating,
                releaseDate: movie.releaseDate
            })
            .then(({data}) => {
                dispatch(updateMovieSuccess(data));
            }).catch(error => {
                throw(error);
            });
    };
}