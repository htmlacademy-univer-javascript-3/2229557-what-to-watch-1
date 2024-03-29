export const ALL_GENRES = 'All Genres';
export const SHOWN_FILMS_STEP = 8;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Similar = '/similar',
  Promo = '/promo',
  Favorite = '/favorite',
}

export enum Namespace {
  Data = 'DATA',
  Film = 'FILM',
  User = 'USER'
}
