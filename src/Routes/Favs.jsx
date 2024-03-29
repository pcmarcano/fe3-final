import React, { useEffect, useContext, useReducer } from "react";
import Card from "../Components/Card";
import { ThemeContext } from "../Theme";

//Favorito Reducer NO FUNCIONO PONERLO EN OTRO ARCHIVO
const reducer = (state, action) => {
  switch (action.tipo) {
    case "AGREGAR":
      return [...state, action.payload];
    case "QUITAR":
      return state.filter((dentista) => dentista.id !== action.payload);
    case "CARGAR":
      return action.payload;
    default:
      return state;
  }
};

const Favs = () => {
  //Tema
  const { theme } = useContext(ThemeContext);

  //Favorito
  const [favDentistas, dispatch] = useReducer(reducer, []);
  //Cargar
  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favDentistas")) || []
    dispatch({ tipo: "CARGAR", payload: storedFavs });
  }, []);
  //Revolver
  useEffect(() => {
    localStorage.setitem("favDentistas", JSON.stringify(favDentistas))
  }, [favDentistas]);
  //Agregar
  const agrFavDentista = (dentista) => {
    dispatch({ tipo: "AGREGAR", payload: dentista });
  };
  //Quitar
  const quiFavDentista = (id) => {
    dispatch({ tipo: "QUITAR", payload: id });
  };

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div
        className='card-grid'
        style={{ color: theme.font, backgroundColor: theme.background }}
      >
        {favDentistas.map((dentista) => (
          <Card
            key =            {dentista.id}
            name =           {dentista.name}
            username =       {dentista.username}
            id =             {dentista.id}
            esFavorito =     {true}
            agrFavDentista = {agrFavDentista}
            quiFavDentista = {quiFavDentista}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;
