import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function redditApiReducer(state = initialState.movieCollection, action) {
    debugger;
    switch(action.type) {
        case types.GET_MOVIES_SUCCESS:
            debugger;
            return {...state, collection: action.movies};

        case types.GET_MOVIE_SUCCESS:
            return {...state, movie: action.movie};

        case types.ADD_MOVIE_SUCCESS:
            return [...state.collection, 
                Object.assign({}, action.movie) ];

        case types.UPDATE_MOVIE_SUCCESS:
            debugger;
            return [
                ...state.collection.filter(movie => 
                    movie.id !== action.movie.id),
                Object.assign({}, action.movie)
            ];

        case types.UNLOAD_MOVIE:
            return {...state, movie: []};

        default:
            return state;
    }
}