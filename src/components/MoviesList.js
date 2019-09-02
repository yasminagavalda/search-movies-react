import React from 'react';
import PropTypes from 'prop-types';
import { Movie } from './Movie';

export const MoviesList = ({ movies }) => (
  <div className="MoviesList">
    {movies.map(movie => (
      <div className="MoviesList-item" key={movie.imdbID}>
        <Movie id={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster} />
      </div>
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.array
};
