
import { Route, Routes } from 'react-router-dom';
import { FC } from 'react';

import { ROUTES } from '../../routes';
import { useAppSelector } from '../../hooks/hooks';
import { getAuthorizationStatus } from '../../store/reducer/user/user-selector';
import { getIsLoaded } from '../../store/reducer/main/main-selector';

import Loader from '../loader/loader';
import PrivateRoute from '../private-route/private-route';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import FilmPage from '../../pages/film-page/film-page';
import MainPage from '../../pages/main-page/main-page';

const App : FC = () => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isLoaded = useAppSelector(getIsLoaded);
  if (!isLoaded){
    return <Loader/>;
  }

  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<MainPage/>}/>
      <Route path={ROUTES.SIGNIN} element={<SignInPage/>}/>
      <Route
        path={ROUTES.MYLIST}
        element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <MyListPage/>
          </PrivateRoute>
        }
      />
      <Route path={ROUTES.FILM} element={<FilmPage />}/>
      <Route
        path={ROUTES.ADDREVIEW}
        element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <AddReviewPage />
          </PrivateRoute>
        }
      />
      <Route path={ROUTES.PLAYER} element={<PlayerPage/>}/>
      <Route path={ROUTES.NOTFOUND} element={<NotFoundPage/>}/>
      <Route path={ROUTES.DEFAULT} element={<NotFoundPage/>}/>
    </Routes>
  );
};

export default App;
