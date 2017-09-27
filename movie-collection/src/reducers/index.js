import {combineReducers} from 'redux';
import movieCollection from './movieCollectionApiReducer';

const rootReducer = combineReducers({
    movieCollection
});

export default rootReducer;