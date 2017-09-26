import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieCollectionActions from '../../actions/movieCollectionApiActions';
import MovieForm from './MovieForm';

class AddMovie extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            movie: Object.assign({}, this.props.movie),
            saving: false
        };

        this.addMovie = this.addMovie.bind(this);
        this.updateMovieState = this.updateMovieState.bind(this);
    }

    updateMovieState(event) {
        const field = event.target.name;
        let movie = Object.assign({}, this.state.movie);
        movie[field] = event.target.value;
        return this.setState({movie: movie});
    }

    addMovie(event) {
        debugger;
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.addMovie(this.state.movie)
            .then(() => this.redirect())
            .catch(error => {
                debugger;
                this.setState({saving: false});
                throw(error);
            });
    }

    redirect() {
        this.props.history.push('/movieCollection');
    }

    render() {
        debugger;
        return (
            <MovieForm movie={this.state.movie}
                onChange={this.updateMovieState} 
                onSave={this.addMovie} 
                saving={this.state.saving}
                isEdit={false} />
        )
    }
}

function mapStateToProps(state, ownProps) {
    debugger;
    return {
        movie: {title: '', description: '', rating: '', releaseDate: ''}
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(movieCollectionActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (AddMovie);