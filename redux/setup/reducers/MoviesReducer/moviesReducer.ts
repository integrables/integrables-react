import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface moviesReducerState {
    data: Array<any>
}

export const moviesInitialState : moviesReducerState = {
    data: [{
        name: "X-Men"
    }, {
        name: "100"
    }]
};

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: moviesInitialState,
    reducers: {
       appendMovie: (state, action: PayloadAction<any>) => {
           //some code...
        }
    },
  })

export const { appendMovie } = moviesSlice.actions;

const moviesReducer = moviesSlice.reducer;
export default moviesReducer;