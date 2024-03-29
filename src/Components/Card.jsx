import React, { useContext } from "react";
import { ThemeContext } from "../Theme";
import { Link } from "react-router-dom";


const Card = ({ name, username, id, esFavorito, agrFavDentista, quiFavDentista }) => {
  //Tema
  const { theme } = useContext(ThemeContext);
  
  //Favoritos
  const dentista = { name, username, id }
  const addFav = () => {
    if (esFavorito) {
      quiFavDentista(id)
    } else{
      agrFavDentista(dentista)
    }
  }

  return (
    <div className="card" style={{color: theme.font, backgroundColor: theme.backgroundColor}}>
      {<img width = {200} src="/images/doctor.jpg" alt="" />}
      <Link to={`/dentist/${id}`}>{name}</Link>   
      {username}
      <button onClick={addFav} className="favButton">{esFavorito ? "⚝" : "⭐"}</button>
    </div>
  );
};

export default Card; 