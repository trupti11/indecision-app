import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = (
    { 
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    }  = {} ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
    }
});

//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expenses Reducer


const expensesReducerDefaultState  = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE': 
            return state.concat(action.expense);
        default: 
            return state;
    }
}


//Filters Reducer
const filerReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};


const filtersReducer = (state = filerReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

//Store creation

const store = createStore(
    combineReducers( {
        expenses: expensesReducer,
        filtersReducer: filtersReducer
    } )
);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addExpense({ description: 'Rent', amount: 100}))

const demoState = {
    expenses: [{
        id: 'id1',
        description: 'Jan rent',
        note: 'this was the final paid for this address',
        amount: 55500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};