// {
//    type: 'ADD_MOVIES',
//    movies: [m1, m2, m3]

// }



// {
//     type: 'DECREASE_COUNT'
// }

export const ADD_MOVIES = 'ADD_MOVIES';



// action creators (we usually use action creators to create actions and corresponding types)

export function addMovies (movies) {
    return {
        type: ADD_MOVIES,
        movies: movies
    }
}