import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';

import {store} from './store';
import {fetchFilmsAction, checkAuthAction, fetchPromoFilm, getFavoriteFilmsAction} from './store/api-action';

import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilm());
store.dispatch(checkAuthAction());
store.dispatch(getFavoriteFilmsAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
