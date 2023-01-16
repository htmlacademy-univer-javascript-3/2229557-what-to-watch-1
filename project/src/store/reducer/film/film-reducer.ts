import { createSlice } from '@reduxjs/toolkit';

import { FilmState } from '../../../types/state';
import { Namespace } from '../../../const';
import { fetchFilmById, fetchReviewsById, fetchSimilarById } from '../../api-action';

const initialState: FilmState = {
  film: null,
  similarFilms: [],
  reviews: []
};

export const filmReducer = createSlice({
  name: Namespace.Film,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmById.fulfilled, (state, action) => {
        state.film = action.payload;
      })
      .addCase(fetchSimilarById.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchReviewsById.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
});
