import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie';
import MovieList from './MovieList';
import Filter from './Filter';
import FormInput from './formInput';

function App() {
  const [movies, setMovies] = useState(Movie);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);
  const [movieNumber, setMovieNumber] = useState(movies.length);
  const refTitle = useRef(null);
  const refDescription = useRef(null);
  const refPosterURL = useRef(null);
  const refRating = useRef(null);

  useEffect(() => {
    setMovieNumber(movies.length);
  }, [movies.length]);

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'title') {
      setFilterTitle(value);
    } else if (filterType === 'rating') {
      setFilterRating(value);
    }
  };

  const addMovie = () => {
    let newMovie = {};
    newMovie.title = refTitle.current.value;
    newMovie.description = refDescription.current.value;
    newMovie.posterURL = refPosterURL.current.value;
    newMovie.rating = refRating.current.value;
    setMovies([...movies, newMovie]);
    refTitle.current.value = '';
    refDescription.current.value = '';
    refPosterURL.current.value = '';
    refRating.current.value = '';
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= parseFloat(filterRating)
  );

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', fontFamily: "fantasy", fontSize: 100, fontStyle: "oblique" }}>Movies{movieNumber}</h1>
      <section className='firstSection'>
        <div className="divFilter">
          <Filter
            filterTitle={filterTitle}
            filterRating={filterRating}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className="divInputForm">
          <FormInput refTitle={refTitle}
            refDescription={refDescription}
            refPosterURL={refPosterURL}
            refRating={refRating}
            addMovie={addMovie} />
        </div>
      </section>
      <div className="divMovieList">
        <MovieList movies={filteredMovies} />
      </div>
    </div >
  );
}
export default App;
