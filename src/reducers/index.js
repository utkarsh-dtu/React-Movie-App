// reuducer functions should be pure functions
// pure functions do not use variables which are lying outsides, and they dont make any change to any state or something

// reducer will always return a new state
// Ui triggers an action to the reducer and this reducer will return a new state after making the requied changes and this reducer sends the new state to the store
// i think the store stores all the states
// reducers should be pure functions 4
import { ADD_MOVIES, ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITES, SHOW_FAVOURITES } from "../actions";

const initialMovieState = {
  list: [],
  favourites: [],
  showFavourites : false
};
// this reducer will return a state, so this time the state is actually an object, and hence we will have to return an object
// export default function movies(state = initialMovieState, action) {
//   if (action.type === ADD_MOVIES) {
//     return {
//         ...state,
//         list : action.movies
//     };
//   }
//   return state; // if action is not there, then we will return this state array (empty one)
// }

export default function movies(state = initialMovieState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      }

    case ADD_TO_FAVOURITE:
        return {
            ...state,
            favourites: [action.movie, ...state.favourites]
        }

    case REMOVE_FROM_FAVOURITES:
      const filteredArray = state.favourites.filter(
        movie => movie.Title !== action.movie.Title
      );

      return {
        ...state, 
        favourites : filteredArray
      }

    case SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites : action.val
      }
    
    default:
        return state 
  }
}

// directly comparing strings is not advisable, because if we want to change the name of this ADD_MOVIES, we can simply change it once here
// const ADD_MOVIES = 'ADD_MOVIES';
