
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';

// action creators (we usually use action creators to create actions and corresponding types)

export function addMovies (movies) {
    return {
        type: ADD_MOVIES,
        movies: movies
    }
}
export function addFavourite (movie) {
    return {
        type: ADD_FAVOURITE,
        movie
    }
}