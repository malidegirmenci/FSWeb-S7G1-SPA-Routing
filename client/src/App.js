import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilmListesi from './Filmler/FilmListesi';
import KaydedilenlerListesi from './Filmler/KaydedilenlerListesi';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import NotFoundPage from './NotFound';
import Film from './Filmler/Film';
export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);
  const [idList,setIdList] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get('http://localhost:5001/api/filmler')
        .then(response => {
          setMovieList(response.data);
          //console.log(response);
        })
        .catch(error => {
          console.error('Sunucu Hatası', error);
        });
    }
    FilmleriAl();
  }, []);
  //console.log(movieList)
  const KaydedilenlerListesineEkle = id => {
    if(!idList.includes(id)){
      console.log("id",id);
      setIdList([...idList,id]);
      const selectedMovie = movieList.find((movie) => movie.id === id)
      setSaved([...saved , selectedMovie]);
      console.log("ArrList:",saved);
    }else{
      console.log("Movie already added")
    }
  };
  
  return (
    <div>
      <KaydedilenlerListesi list={saved}/>
      <Switch>
        <Route exact path="/">
          <FilmListesi movies={movieList} ></FilmListesi>
        </Route>
        <Route exact path="/filmler/:id">
          <Film addToList={KaydedilenlerListesineEkle}></Film>
        </Route>
        <Route exact path="*"><NotFoundPage/></Route>
      </Switch>
    </div>
  );
}
