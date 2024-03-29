import React, { useContext } from "react";
import { ThemeContext } from "../Theme";
import { Link } from "react-router-dom";

const Card = ({
  name,
  username,
  id,
  esFavorito,
  agrFav,
  quiFav,
}) => {
  //Tema
  const { theme } = useContext(ThemeContext);

  //Favoritos
  const addFav = () => {
    if (esFavorito) {
      quiFav(id)
    } else {
      agrFav({ name, username, id })
    }
  };

  return (
    <div className='card' style={{ color: theme.font }}>
      {<img width={200} src='/images/doctor.jpg' alt='' />}
      <Link
        to={`/dentist/${id}`}
        style={{ color: theme.font, backgroundColor: theme.background }}
      >
        {name}
      </Link>
      {username}
      <button onClick={addFav} className='favButton'>
        {esFavorito ? "⚝" : "⭐"}
      </button>
    </div>
  );
};

export default Card;