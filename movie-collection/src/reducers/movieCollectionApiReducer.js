import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function redditApiReducer(state = initialState.movieCollection, action) {
    switch(action.type) {
        case types.GET_MOVIES_SUCCESS:
            debugger;
            return action.movieCollection;

        case types.GET_MOVIE_SUCCESS:
            return [
                ...state.filter(movie => movie.Id === action.movie.Id),
                Object.assign({}, action.movie)
            ];

        default:
            return state;
    }
}