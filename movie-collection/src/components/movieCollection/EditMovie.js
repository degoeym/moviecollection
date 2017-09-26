import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieCollectionActions from '../../actions/movieCollectionApiActions';
import MovieForm from './MovieForm';

class EditMovie extends React.Component {
    constructor(props, context) {
        super(props, context);
        debugger;
        this.state = {
            movie: Object.assign({}, this.props.movie),
            saving: false
        };

        this.updateMovieState = this.updateMovieState.bind(this);
        this.updateMovie = this.updateMovie.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        debugger;
        if(this.props.movie.id != nextProps.movie.id) {
            this.setState({movie: Object.assign({}, nextProps.movie)});
        }
    }

    updateMovieState(event) {
        debugger;
        const field = event.target.name;
        let movie = Object.assign({}, this.state.movie);
        movie[field] = event.target.value;
        return this.setState({movie: movie});
    }

    updateMovie(event) {
        debugger;
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.updateMovie(this.state.movie)
            .then(() => this.redirect())
            .catch(error => {
                debugger;
                this.setState({saving: false});
                throw(error);
            });
    }

    redirect() {
        this.setState({saving: false});
        this.props.history.push('/movieCollection');
    }

    render() {
        debugger;
        return (
            <MovieForm movie={this.state.movie}
                onChange={this.updateMovieState} 
                onSave={this.updateMovie} 
                saving={this.state.saving} 
                isEdit={true} />
        )
    }
}

function getMovieFromCollection(movieCollection, movieId) {
    debugger;
    const movie = movieCollection.filter(movie => movie.id === movieId);
    if (movie.length) {
        return movie[0];
    }
    return null;
}

function mapStateToProps(state, ownProps) {
    debugger;
    const movieId = parseInt(ownProps.match.params.id);
    let movie = {title: '', description: '', rating: '', releaseDate: ''};

    if (state.movieCollection.length > 0) {
        movie = getMovieFromCollection(state.movieCollection, movieId);
    }

    return {
        movie: movie
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(movieCollectionActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (EditMovie);