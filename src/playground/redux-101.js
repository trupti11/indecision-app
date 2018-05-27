import  { createStore } from 'redux';

//action generator
const incrementCount = ({ incrementBy = 1 } = {}) => ( {
// const incrementCount = (payload = {}) => ( {
    type: 'INCREMENT',
    incrementBy
    // incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
    // incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count = 1 } = {}) => ({
    type: 'SET',
    count
});

//REDUCERS
//Reducers are the pure functions
//Never change the state or action

const countReducer = (state = { count: 0 }, action) => {

    switch (action.type ) {
        case 'INCREMENT':
        // const incrementBy = typeof(action.incrementBy) === 'number' ? action.incrementBy : 1;
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        // const decrementBy = typeof(action.decrementBy) === 'number' ? action.decrementBy : 1;
        return {
            count: state.count - action.decrementBy
        };
        case 'RESET':
        return {
            count: 0
        };
        case 'SET':
        return {
            count: action.count
        };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe( () => {
    console.log(store.getState());
});



// store.dispatch({
//         type: 'INCREMENT',
//         incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

// unsubscribe();

// store.dispatch({
//         type: 'INCREMENT'
// });
store.dispatch(incrementCount());

// console.log(store.getState());

// store.dispatch({
//         type: 'RESET'
// });
store.dispatch(decrementCount( {decrementBy: 3} ));

// console.log(store.getState());

// store.dispatch({
//         type: 'DECREMENT',
//         decrementBy: 10
// });
store.dispatch(resetCount());


// store.dispatch({
//     type: 'SET',
//     count: 101
// });
store.dispatch(setCount({ count : 101}));

// console.log(store.getState());

// this.setState ((prevState) => {

// });