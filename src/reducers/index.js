// reuducer functions should be pure functions 
// pure functions do not use variables which are lying outsides, and they dont make any change to any state or something

// reducer will always return a new state
// Ui triggers an action to the reducer and this reducer will return a new state after making the requied changes and this reducer sends the new state to the store
// i think the store stores all the states
// reducers should be pure functions 
export default function movies (state = [], action) {
    
    if(action.type === 'ADD_MOVIES') { return action.movies; }
    return state; // if action is not there, then we will return this state array (empty one)
}