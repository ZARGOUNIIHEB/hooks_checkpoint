import React from 'react';
import MovieCard from './MovieCard';
import './App.css';

const MovieList = ({ movies }) => {
    return (
        <div className="movieList">
            {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
