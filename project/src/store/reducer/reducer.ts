import { mainReducer } from './main/main-reducer';
import { filmReducer } from './film/film-reducer';
import { userReducer } from './user/user-reducer';
import { combineReducers } from '@reduxjs/toolkit';
import { Namespace } from '../../const';

export const reducer = combineReducers({
  [Namespace.Data]: mainReducer.reducer,
  [Namespace.Film]: filmReducer.reducer,
  [Namespace.User]: userReducer.reducer
});
