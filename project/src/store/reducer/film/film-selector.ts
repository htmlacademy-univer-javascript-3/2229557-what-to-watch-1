import { Film } from '../../../types/film';
import { State } from '../../../types/state';
import { Namespace } from '../../../const';
import { Review } from '../../../types/review';

export const getFilm = (state: State): Film | null => state[Namespace.Film].film;
export const getSimilarFilm = (state: State): Film[] => state[Namespace.Film].similarFilms;
export const getReviews = (state: State): Review[] => state[Namespace.Film].reviews;