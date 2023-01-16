import { store } from '../store';
import {User} from "./user";
import {AuthorizationStatus} from "../const";
import {Film} from "./film";
import {Review} from "./review";

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type FilmState = {
  film: Film | null,
  reviews: Review[],
  similarFilms: Film[]
}

export type MainState = {
  films: Film[],
  promoFilm: Film | null,
  activeGenre: string,
  isLoaded: boolean,
  error: string | null,
  favoriteFilms: Film[]
}

export type UserState = {
  authorizationStatus: AuthorizationStatus,
  user: User | null
}