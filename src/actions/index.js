
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SHOW_FAVOURITES = 'SHOW_FAVOURITES';
// action creators (we usually use action creators to create actions and corresponding types)

export function addMovies (movies) {
    return {
        type: ADD_MOVIES,
        movies: movies
    }
}
export function addFavourite (movie) {
    return {
        type: ADD_TO_FAVOURITE,
        movie
    }
}

export function removeFromFavourite (movie) {
    return {
        type : REMOVE_FROM_FAVOURITES,
        movie
    }
}

// val is either true or false
export function setShowFavourites(val) {

    return {
        type : SHOW_FAVOURITES,
        val
    }
}