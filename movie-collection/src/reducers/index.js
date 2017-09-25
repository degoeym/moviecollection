import {combineReducers} from 'redux';
import movieCollectionApi from './movieCollectionApiReducer';

const rootReducer = combineReducers({
    movieCollectionApi
});

export default rootReducer;