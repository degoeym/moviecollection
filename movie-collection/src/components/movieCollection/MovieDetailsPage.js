import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieCollectionActions from '../../actions/movieCollectionApiActions';

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

    redirectToMoviesList() {
        this.props.history.push('/movieCollection');
    }

    render() {
        debugger;
        var movieDetails = this.props.movie;
        var rating = "";
        switch (movieDetails.rating) {
            case 1:
                rating = "G";
                break;
            case 2:
                rating = "PG";
                break;        
            case 3:
                rating = "PG-13";
                break;
            case 4:
                rating = "R";
                break;
            case 5:
                rating = "NC-17";
                break;
            case 6:
                rating = "X";
                break;
            default:
                rating = "N/R";
                break;
        }
        
        var releaseDate = new Date(movieDetails.releaseDate);
        var inventoryDate = new Date(movieDetails.inventoryDate);
        return (
            <div>
                <h1>{movieDetails.title}</h1>
                <h2>{movieDetails.description}</h2>
                <p>Rated {rating}</p>
                <p>Release date: {`${releaseDate.getMonth()+1}/${releaseDate.getDate()}/${releaseDate.getFullYear()}`}</p>
                <p>Added to collection: {`${inventoryDate.getMonth()+1}/${inventoryDate.getDate()}/${inventoryDate.getFullYear()}`}</p>
                <input type='button' value='Back to Collection' className='btn btn-primary' onClick={this.redirectToMoviesList}/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    debugger;
    return {
        movie: state.movieCollection
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(movieCollectionActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (MovieDetailsPage);
