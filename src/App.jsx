import { Routes, Route } from 'react-router-dom';
import css from './App.module.css';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Navigation from './components/Navigation/Navigation';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className={css.App}>
      <Navigation />
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
      <Toaster />
    </div>
  )
}

export default App
