import * as types from './actionTypes';
import axios from 'axios';

var axiosInstance = axios.create({
    baseURL: 'http://moviecollectionapi20170925.azurewebsites.net/'
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

export function unloadMovie() {
    return { type: types.UNLOAD_MOVIE }
}

export function getMovies() {
    debugger;
    return function(dispatch) {
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
            }).catch(response => {
                debugger;
                return Promise.reject(response.json());
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
            .then(() => {
                debugger;
                dispatch(updateMovieSuccess(movie));
            }).catch(error => {
                debugger;
                throw(error);
            });
    };
}