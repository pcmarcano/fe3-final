import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ThemeContext from "../context";
import axios from "axios";

const Detail = () => {
  //Tema
  const { theme } = useContext(ThemeContext);

  const [dentista, setDentista] = useState({});
  const { id } = useParams();


  useEffect(() => {
    axios (`https://jsonplaceholder.typicode.com/users/` + id) //Usando axios porque fetch no funciono
    .then (res => setDentista(res.data))
  }, [id])

  if (!dentista) {
    return <div>Espere un momento...</div>;
  }

  return (
    <>
      <div
        style={{ color: theme.font, backgroundColor: theme.backgroundColor }}
      >
        <h1>Detalles </h1>
        <p>Nombre: {dentista.name}</p>
        <p>Correo: {dentista.email}</p>
        <p>Telefono: {dentista.phone}</p>
        <p>Setio web: {dentista.website}</p>
      </div>
    </>
  );
};

export default Detail;