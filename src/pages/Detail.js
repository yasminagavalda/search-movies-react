import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ButtonBackToHome } from '../components/ButtonBackToHome';

const API_KEY = '4287ad07';

export const Detail = ({ match }) => {
  const [movie, setMovie] = useState({});

  const fetchMovie = ({ id: movieId }) => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`)
      .then(res => res.json())
      .then(movieRes => {
        setMovie(movieRes);
      });
  };

  useEffect(() => {
    const { id } = match.params;
    fetchMovie({ id });
  }, []);

  return (
    <div>
      <ButtonBackToHome />
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} />
      <h3>{movie.Actors}</h3>
      <span>{movie.Metascore}</span>
      <p>{movie.Plot}</p>
    </div>
  );
};

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string
  })
};
