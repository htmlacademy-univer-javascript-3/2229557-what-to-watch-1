import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Film} from '../types/film';
import {User} from '../types/user';
import {AppDispatch, State} from '../types/state';
import {APIRoute} from '../const';
import { AuthResponse } from '../types/auth-response';
import {Review} from '../types/review';

type ApiConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const fetchFilmsAction = createAsyncThunk<Film[], undefined, ApiConfig>(
  'data/fetchFilms',
  async (_arg, { extra: api}) => {
    const resp = await api.get<Film[]>(APIRoute.Films);
    return resp.data;
  },
);

export const fetchFilmById = createAsyncThunk<Film, string, ApiConfig>(
  'fetchFilmById',
  async (filmId: string, { extra: api }) => {
    const resp = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
    return resp.data;
  }
);

export const fetchReviewsById = createAsyncThunk<Review[], string, ApiConfig>(
  'fetchReviewsById',
  async (filmId: string, { extra: api }) => {
    const resp = await api.get<Review[]>(
      `${APIRoute.Comments}/${filmId}`
    );
    return resp.data;
  }
);

export const fetchSimilarById = createAsyncThunk<Film[], string, ApiConfig>(
  'fetchSimilarById',
  async (filmId: string, { extra: api }) => {
    const resp = await api.get<Film[]>(
      `${APIRoute.Films}/${filmId}${APIRoute.Similar}`
    );
    return resp.data;
  }
);

export const postReview = createAsyncThunk<void, Review, ApiConfig>(
  'data/postReviewById',
  async ({ comment, rating, filmId }, { extra: api }) => {
    await api.post<Review>(`${APIRoute.Comments}/${filmId}`, {
      comment,
      rating,
    });
  }
);

export const getFavoriteFilmsAction = createAsyncThunk<Film[], undefined, ApiConfig>(
  'data/getFavoriteFilms',
  async (_arg, { extra: api}) => {
    const resp = await api.get<Film[]>(APIRoute.Favorite);
    return resp.data;
  },
);

export const setFavoriteFilmAction = createAsyncThunk<
  Film,
  { id: number; status: number },
  ApiConfig>(
    'films/setFavorite',
    async ({ id, status }, { extra: api }) => {
      const resp = await api.post<Film>(`${APIRoute.Favorite}/${id}/${status}`);
      return resp.data;
    }
  );

export const changeFilmFavoriteStatus = createAsyncThunk<Film, { filmId: number; status: number }, ApiConfig>(
  'changeFilmFavoriteStatus',
  async ({ filmId: id, status: isFavorite }, { dispatch, extra: api }) => {
    const resp = await api.post<Film>(
      `${APIRoute.Favorite}/${id}/${isFavorite}`
    );

    return resp.data;
  }
);

export const changePromoFavoriteStatus = createAsyncThunk<Film, { filmId: number; status: number }, ApiConfig>(
  'changePromoFavoriteStatus',
  async ({ filmId: id, status: isFavorite }, { dispatch, extra: api }) => {
    const resp = await api.post<Film>(
      `${APIRoute.Favorite}/${id}/${isFavorite}`
    );

    return resp.data;
  }
);

export const fetchPromoFilm = createAsyncThunk<Film, undefined, ApiConfig>(
  'fetchPromoFilm',
  async (_arg, { extra: api }) => {
    const resp = await api.get<Film>(APIRoute.Promo);
    return resp.data;
  }
);

export const checkAuthAction = createAsyncThunk<User, undefined, ApiConfig>(
  'user/checkAuth',
  async (_arg, { extra: api}) => {
    const resp = await api.get<User>(APIRoute.Login);
    return resp.data;
  }
);

export const loginAction = createAsyncThunk<User, AuthResponse, ApiConfig>(
  'user/login',
  async ({login: email, password}, { extra: api}) => {
    const resp = await api.post<User>(APIRoute.Login, {email, password});
    return resp.data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, ApiConfig>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
  }
);
