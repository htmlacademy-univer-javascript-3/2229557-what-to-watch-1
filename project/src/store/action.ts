import { createAction } from '@reduxjs/toolkit';

import { Film } from '../types/film';
import { AuthorizationStatus } from '../const';
import { User } from '../types/user';
import {ROUTES} from '../routes';

export const changeGenre = createAction<string>('changeGenre');
export const fillFilms = createAction<Film[]>('setFilms');
export const setFilmsLoadedStatus = createAction<boolean>('setFilmsLoadedStatus');
export const changeAuthorizationStatus = createAction<AuthorizationStatus>('changeAuthorizationStatus');
export const setUser = createAction<User>('setUser');
export const redirectToRoute = createAction<ROUTES | string>('redirectToRoute');
export const setError = createAction<string | null>('setError');
