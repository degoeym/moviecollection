import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/home/homePage';
import MovieCollectionPage from './components/movieCollection/MovieCollectionPage';

class Main extends React.Component {
    render() {
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/movieCollection' component={MovieCollectionPage} />
                </Switch>
            </main>
        );
    }
}

export default Main;