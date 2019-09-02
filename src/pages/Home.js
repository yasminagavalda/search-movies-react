import React, { useState } from 'react';
import { Title } from '../components/Title';
import { SearchForm } from '../components/SearchForm';
import { MoviesList } from '../components/MoviesList';

export const Home = () => {
  const [results, setResults] = useState([]);
  const [usedSearch, setUsedSearch] = useState(false);

  const handleResults = resultsRes => {
    setResults(resultsRes);
    setUsedSearch(true);
  };

  const renderResults = () => (results.length ? <MoviesList movies={results} /> : <p>Sorry! Results not found!</p>);

  return (
    <div>
      <Title>Search movies</Title>
      <div className="SearchForm-wrapper">
        <SearchForm onResults={handleResults} />
      </div>
      {usedSearch ? renderResults(results) : <small>Use the form to search a movie</small>}
    </div>
  );
};
