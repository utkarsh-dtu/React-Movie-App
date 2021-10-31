import React from "react";
import {addFavourite, removeFromFavourite} from '../actions'
// dispatch sends an action to the reducer and the reducer will return a new state to the store
// boeing 787 dreamliner
class MovieCard extends React.Component {
    
    handleFavoriteClick = () => {
        const { movie } = this.props;
        this.props.dispatch(addFavourite(movie));
    }

    handleUnFavoriteClick = () => {
        const { movie } = this.props;
        this.props.dispatch(removeFromFavourite(movie));
    }

    render() {

        const {movie, isFavorite} = this.props;
        return (
            <div className="movie-card">
                <div className="left">

                    <img alt = 'movie-poster' src = {movie.Poster}/>
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {/* <button className = "favourite-btn" onClick={this.handleFavoriteClick}>Favorite</button> */}
                        {
                            isFavorite
                            ? 
                            <button className = "unfavourite-btn" onClick={this.handleUnFavoriteClick}>Unfavorite</button> 
                            : <button className = "favourite-btn" onClick={this.handleFavoriteClick}>Favorite</button> 
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default MovieCard;
