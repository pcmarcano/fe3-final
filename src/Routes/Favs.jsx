import React, { useContext } from "react";
import Card from "../Components/Card";
import { ThemeContext } from "../Theme";
/* import {favRedu, agrFav, quiFav} from '../Reducers/FavReducer'
 */

const Favs = () => {
  //Tema
  const { theme } = useContext(ThemeContext);

//Favorito
  const favDentistas = JSON.parse(localStorage.getItem("favs")) || []
/*   const [favDentistas, dispatch] = useReducer (favRedu, []) */
  //Agregar
/*   const handleAgrFav = (dentista) => {
    dispatch(agrFav(dentista))
  } */
  //Quitar
/*   const handleQuiFav = (id) => {
    dispatch(quiFav(id))
  } */

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div
        className='card-grid'
        style={{ color: theme.font, backgroundColor: theme.background }}
      >
        {favDentistas.map((dentista) => (
          <Card
            key =         {dentista.id}
            name =        {dentista.name}
            username =    {dentista.username}
            id =          {dentista.id}
            esFavorito =  {true}
/*             agrFav =      {handleAgrFav}
            quiFav =      {handleQuiFav} */
          />
        ))}
      </div>
    </>
  );
};

export default Favs;