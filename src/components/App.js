import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { render } from "@testing-library/react";
import {data} from '../data';

class App extends React.Component  {

  componentDidMount () {
    // make api call
    // dispatch action 
    const {store} = this.props;
    store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate();
    });


    // we are dispatching an action to the reducer to add the movie
    store.dispatch({
      type : 'ADD_MOVIES',
      movies: data
    }); // whenever dispatch is called, subscribe waala callback is called

    console.log('STATE', store.getState());
    
  }

  render(){
  const movies = this.props.store.getState();
  console.log('RENDER')

    return (
      <div className="App">
        <Navbar/>
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favorites</div>
          </div>

          <div className="list">
              {/* {data.map(movie => {
                  return (<MovieCard movie = {movie}/>)
              })} */}
              {movies.map((movie, index) => {
                  return <MovieCard movie = {movie} key = {`movies-${index}`}/>
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
