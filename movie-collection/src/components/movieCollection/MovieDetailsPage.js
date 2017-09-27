import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieCollectionActions from '../../actions/movieCollectionApiActions';
import MovieDetails from './MovieDetails';

class MovieDetailsPage extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.redirectToMoviesList = this.redirectToMoviesList.bind(this);
    }
    
    componentWillMount() {
        debugger;
        var id = this.props.match.params.id;
        this.props.actions.getMovie(id);
    }

    componentWillUnmount() {
        this.props.actions.unloadMovie();
    }

    redirectToMoviesList() {
        this.props.history.push('/movieCollection');
    }

    render() {
        debugger;
        return (
            <div>
                { Object.keys(this.props.movie).length > 0 && 
                <MovieDetails 
                    movie={this.props.movie}
                    onClick={this.redirectToMoviesList} />}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    debugger;
    return {
        movie: state.movieCollection.movie
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(movieCollectionActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (MovieDetailsPage);
