import { createSlice } from '@reduxjs/toolkit';
import { fetchFilmsAction, fetchPromoFilm } from '../../api-action';
import { changeGenre } from '../../action';
import { Namespace, ALL_GENRES } from '../../../const';
import { MainState } from '../../../types/state';

const initialState: MainState = {
  films: [],
  activeGenre: ALL_GENRES,
  promoFilm: null,
  error: null,
  isLoaded: false
};

export const mainReducer = createSlice({
  name: Namespace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(changeGenre, (state, action) => {
        state.activeGenre = action.payload;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isLoaded = true;
      });
  }
});
