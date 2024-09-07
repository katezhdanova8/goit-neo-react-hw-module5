import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import css from './App.module.css';
import Navigation from './components/Navigation/Navigation';
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <div className={css.App}>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route
            path='/movies'
            element={<MoviesPage />}
          />
          <Route
            path='/movies/:movieId'
            element={<MovieDetailsPage />}
          />
          <Route
            path='/movies/:movieId/cast'
            element={<MovieDetailsPage showCast />}
          />
          <Route
            path='/movies/:movieId/reviews'
            element={<MovieDetailsPage showReviews />}
          />
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Routes>
      </Suspense>
      <Toaster />
    </div>
  )
}

export default App
