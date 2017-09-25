import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieCollectionActions from '../../actions/movieCollectionApiActions';
import MovieList from './MovieList';

class MovieCollectionPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        this.props.actions.getMovies();
    }

    render() {
        return (
            <div>
                <MovieList movies={this.props.movies} />
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