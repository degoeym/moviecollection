import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieCollectionActions from '../../actions/movieCollectionApiActions';
import MovieList from './MovieList';

class MovieCollectionPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.redirectToAddMoviePage = this.redirectToAddMoviePage.bind(this);
    }

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
                <input type="button" value="Add Movie" className="btn btn-primary" onClick={this.redirectToAddMoviePage} />
                { this.props.movies.length > 0 && <MovieList movies={this.props.movies} />}                
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