import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, fillFilms, setFilmsLoadedStatus, changeAuthorizationStatus, setUser } from './action';

import { ALL_GENRES } from '../const';
import {Film} from '../types/film';
import {AuthorizationStatus} from '../const';
import {User} from '../types/user';

type AppState = {
  films: Film[];
  activeGenre: string;
  isLoaded: boolean;
  authorizationStatus: AuthorizationStatus;
  user: User | null;
};

const initialState : AppState = {
  films: [],
  activeGenre: ALL_GENRES,
  isLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(fillFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setFilmsLoadedStatus, (state, action) => {
      state.isLoaded = action.payload;
    })
    .addCase(changeAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});
