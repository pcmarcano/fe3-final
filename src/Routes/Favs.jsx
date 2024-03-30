import React, { useContext } from "react";
import Card from "../Components/Card";
import { ThemeContext } from "../Theme";


const Favs = () => {
  //Tema
  const { theme } = useContext(ThemeContext);

//Favorito
  const favDentistas = JSON.parse(localStorage.getItem("favs")) || []


  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div
        className='card-grid'
        style={{ color: theme.font }}
      >
        {favDentistas.map((dentista) => (
          <Card
            key =         {dentista.id}
            name =        {dentista.name}
            username =    {dentista.username}
            id =          {dentista.id}
            esFavorito =  {true}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;