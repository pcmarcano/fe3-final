import React, { useContext } from "react";
import { ThemeContext } from "../Theme";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, esFavorito }) => {
  //Tema
  const { theme } = useContext(ThemeContext);

  //Favoritos
  const addFav = (e) => {
    e.preventDefault();
    const favCard = { name, username, id };
    const existingFavs = JSON.parse(localStorage.getItem("favs")) || [];
    const newFavs = [...existingFavs, favCard];
    localStorage.setItem("favs", JSON.stringify(newFavs));
    console.log("Favoritos:", newFavs);
  };
  const removeFav = () => {
    const existingFavs = JSON.parse(localStorage.getItem("favs")) || [];
    const updatedFavs = existingFavs.filter((dentista) => dentista.id !== id);
    localStorage.setItem("favs", JSON.stringify(updatedFavs));
    console.log("Favoritos actualizados:", updatedFavs);
    window.location.reload(); // Actualizar pagina
  };

  return (
    <div className='card' style={{ color: theme.font }}>
      {<img width={200} src='/images/doctor.jpg' alt='' />}
      <Link
        to={`/dentist/${id}`}
        style={{ color: theme.font, backgroundColor: theme.background }}
      >
        <span>{name}</span>
      </Link>
      <span>{username}</span>
      {esFavorito ? (
        <button onClick={removeFav} className='favButton'>
          ⚪
        </button>
      ) : (
        <button onClick={addFav} className='favButton'>
          ⭐
        </button>
      )}
    </div>
  );
};
export default Card;