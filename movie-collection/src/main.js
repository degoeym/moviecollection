import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/home/homePage';
import MovieCollectionPage from './components/movieCollection/MovieCollectionPage';
import MovieDetailsPage from './components/movieCollection/MovieDetailsPage';
import EditMovie from './components/movieCollection/EditMovie';
import AddMovie from './components/movieCollection/AddMovie';

class Main extends React.Component {
    render() {
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/movieCollection/add' component={AddMovie} />
                    <Route exact path='/movieCollection/edit/:id' component={EditMovie} />
                    <Route exact path='/movieCollection/:id' component={MovieDetailsPage} />
                    <Route path='/movieCollection' component={MovieCollectionPage} />
                </Switch>
            </main>
        );
    }
}

export default Main;