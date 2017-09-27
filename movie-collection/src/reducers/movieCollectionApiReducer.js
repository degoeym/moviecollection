import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function redditApiReducer(state = initialState.movieCollection, action) {
    switch(action.type) {
        case types.GET_MOVIES_SUCCESS:
            debugger;
            return action.movies;

        case types.GET_MOVIE_SUCCESS:
            return action.movie;

        case types.ADD_MOVIE_SUCCESS:
            return [...state, Object.assign({}, action.movie) ];

        case types.UPDATE_MOVIE_SUCCESS:
            debugger;
            return [
                ...state.filter(movie => movie.id !== action.movie.id),
                Object.assign({}, action.movie)
            ];

        default:
            return state;
    }
}