import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { render } from "@testing-library/react";
import {data} from '../data';
import {addMovies, setShowFavourites} from '../actions'

class App extends React.Component  {

  componentDidMount () {
    // make api call
    // dispatch action 
    const {store} = this.props;
    store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate(); // forceUpdate will re-render the whole App component
    });


    // dispatch will just send an action to the reducer
    // we are dispatching an action to the reducer to add the movie
    // store.dispatch({
    //   type : 'ADD_MOVIES',
    //   movies: data
    // }); // whenever dispatch is called, subscribe waala callback is called
    store.dispatch(addMovies(data)); // whenever dispatch is called, subscribe waala callback is called

    console.log('STATE', store.getState());
    
  }

  isMovieFavorite = (movie) => {
    const {favourites} = this.props.store.getState();
    const index = favourites.indexOf(movie);

    if(index !== -1) {
      // we found the movie in favorites
      return true; 
    } 

    return false;
  }


  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  }

  render(){
  const {list, favourites, showFavourites} = this.props.store.getState(); // {list : [], favorites : []}
  console.log('STATE', this.props.store.getState());
  // console.log('RENDER')

  const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick = {() => this.onChangeTab(false)}>Movies</div>
            <div className= {`tab ${!showFavourites ? '' : 'active-tabs'}`} onClick = {() => this.onChangeTab(true)}>Favorites</div>
          </div>

          <div className="list">
              {/* {data.map(movie => {
                  return (<MovieCard movie = {movie}/>)
              })} */}
              {displayMovies.map((movie, index) => {
                  return <MovieCard 
                  movie = {movie} 
                  key = {`movies-${index}`} 
                  dispatch = {this.props.store.dispatch}
                  isFavorite = {this.isMovieFavorite(movie)}
                  
                  />
              })}
          </div>
          {displayMovies.length == 0 ? <div className="no-movies">No Movies to display </div> : null}
        </div>
      </div>
    );
  }
}

export default App;
