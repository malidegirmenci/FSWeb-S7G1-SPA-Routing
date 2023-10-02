import React from 'react';
import { Link } from 'react-router-dom';
import './KaydedilenlerListesi.css';
import { NavLink } from 'react-router-dom';
export default function KaydedilenlerListesi(props) {
  const {list} = props;

  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {list.map(movie => (
        //<span className="saved-movie" key={movie.id} > <Link to={`/filmler/${movie.id}`}> {movie.title}</Link> </span>
        <span className="saved-movie" key={movie.id} > <NavLink to={`/filmler/${movie.id}`} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      } > {movie.title}</NavLink> </span>
      ))}
      <Link className="home-button" to="/">Anasayfa</Link>
    </div>
  );
}
