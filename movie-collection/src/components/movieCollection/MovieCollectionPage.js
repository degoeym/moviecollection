import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Switch, Route} from 'react-router-dom';
import MovieDetailsPage from '../movieCollection/MovieDetailsPage';
import MovieForm from '../movieCollection/MovieForm'; 
import * as movieCollectionActions from '../../actions/movieCollectionApiActions';
import MovieList from './MovieList';

class MovieCollectionPage extends React.Component {
<<<<<<< HEAD
    //constructor(props, context) {
    //    super(props, context);
    //}
=======
    constructor(props, context) {
        super(props, context);

        this.redirectToAddMoviePage = this.redirectToAddMoviePage.bind(this);
    }
>>>>>>> 0fccf90ad524e215ed723a83e74cb44dcbf6b114

    componentDidMount() {
        this.props.actions.getMovies();
    }

    redirectToAddMoviePage() {
        debugger;
        this.props.history.push('/movieCollection/add');
    }
    
    render() {
        return (
            <div>
<<<<<<< HEAD
                {this.props.movies.length > 0 && <MovieList movies={this.props.movies} />}
=======
                <input type="button" value="Add Movie" className="btn btn-primary" onClick={this.redirectToAddMoviePage} />
                { this.props.movies.length > 0 && <MovieList movies={this.props.movies} />}                
>>>>>>> 0fccf90ad524e215ed723a83e74cb44dcbf6b114
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    debugger;
    return {
        movies: state.movieCollection
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(movieCollectionActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (MovieCollectionPage);