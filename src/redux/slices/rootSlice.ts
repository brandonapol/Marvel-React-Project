import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Name',
        description: 'Description',
        comics_appeared_in: 'Comics Appeared In',
        super_power: 'Super Power',
        date_created: 'Date Created',
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload},
        chooseComics: (state, action) => { state.comics_appeared_in = action.payload},
        choosePower: (state, action) => { state.super_power = action.payload},
        chooseDate: (state, action) => { state.date_created = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, chooseDescription, chooseComics, choosePower, chooseDate } = rootSlice.actions;