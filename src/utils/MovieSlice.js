import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerId: null,
    },
    reducers:{
        addNowPlayingMovies:(state,action) => {
            state.nowPlayingMovies =action.payload;
        },
        addtrailerId : (state,action) => {
            state.trailerId = action.payload;
        }
    }
})

export const {addNowPlayingMovies,addtrailerId} = MovieSlice.actions;
export default MovieSlice.reducer;