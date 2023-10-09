import React, { useState, useRef, useEffect } from 'react';
//import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie';
import MovieList from './MovieList';
import Filter from './Filter';
import FormInput from './formInput';
import blueLogo from './icons/checked-eye.png';
import grayLogo from './icons/unchecked_eye.png';

function App() {
  const [movies, setMovies] = useState(Movie);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);
  const [movieNumber, setMovieNumber] = useState(movies.length);
  const [checked, setChecked] = useState();
  const [seenCounter, setSeenCounter] = useState(movies.filter((el) => el.checked).length);
  const [unSeenCounter, setUnSeenCounter] = useState(movies.filter((el) => !el.checked).length);
  const refTitle = useRef();
  const refDescription = useRef();
  const refPosterURL = useRef();
  const refRating = useRef();

  // const userSchema = yup.object().shape({

  //   refTitle: yup.string().required('Title is Missing'),
  //   refDescription: yup.string(),
  //   refPosterURL: yup.string(),
  //   refRating: yup.number()
  // })

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

  const addMovie = async () => {
    let newMovie = {};
    console.log('Title : ', refTitle.current.value);
    console.log('Description : ', refDescription.current.value);
    console.log('posterURL : ', refPosterURL.current.value);
    console.log('Rating : ', refRating.current.value);

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

  const handleChecked = (id, value) => {
    const index = filteredMovies.findIndex(obj => {
      return obj.id === id;
    });
    filteredMovies[index].checked = value;
    setSeenCounter(filteredMovies.filter((el) => el.checked).length);
    setUnSeenCounter(filteredMovies.filter((el) => !el.checked).length);
  };

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
      <div className="middleDiv">
        <output className='seenCounterOutput'>{seenCounter}</output>
        <img className='AppEyeIcon' src={blueLogo} alt=''></img>
        <output className='unSeenCounterOutput'>{unSeenCounter}</output>
        <img className='AppEyeIcon' src={grayLogo} alt=''></img>
      </div>
      <div className="divMovieList">
        <MovieList setChecked={setChecked} handleChecked={handleChecked} movies={filteredMovies} />
      </div>
    </div >
  );
}
export default App;
