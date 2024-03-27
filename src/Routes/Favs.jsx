import React, { useState, useEffect, useContext } from "react";
import Card from "../Components/Card";
import ThemeContext from "../context";

const Favs = () => {
  //Tema
  const { theme } = useContext(ThemeContext);

  const [favDentistas, setFavDentistas] = useState([]);
  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavDentistas(favoritos);
  }, []);

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div
        className='card-grid'
        style={{ color: theme.font, backgroundColor: theme.backgroundColor }}
      >
        {favDentistas.map((dentista) => (
          <Card
            key={dentista.id}
            name={dentista.name}
            username={dentista.username}
            id={dentista.id}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;