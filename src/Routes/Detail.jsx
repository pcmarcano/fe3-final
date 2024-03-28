import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ThemeContext from "../context";
import axios from "axios";

const Detail = () => {
  //Tema
  const { theme } = useContext(ThemeContext);

  const [dentista, setDentista] = useState({});
  const { id } = useParams();
  const [form, setForm] = useState({
    name: "",
    email:"",
    phone: "",
    website: "",
  })

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

        <table>
          <caption><h2>{dentista.name}</h2></caption>
          <tbody>
            <tr>
              <th>Correo</th>
              <th>Telefono</th>
              <th>Sitio web</th>
              
            </tr>
            <tr>
              <td>{dentista.email}</td>
              <td>{dentista.phone}</td>
              <td>{dentista.website}</td>
            </tr>
          </tbody>
        </table>


{/*         <table>
          <tbody>
            <tr>
              <td>Nombre</td>
              <td>{dentista.name}</td>
            </tr>
            <tr>
              <td>Correo</td>
              <td>dentista.email</td>
            </tr>
            <tr>
              <td>Telefono</td>
              <td>{dentista.phone}</td>
            </tr>
            <tr>
              <td>Sitio web</td>
              <td>{dentista.website}</td>
            </tr>
          </tbody>
        </table> */}


        {/*<p>Nombre: {dentista.name}</p>
        <p>Correo: {dentista.email}</p>
        <p>Telefono: {dentista.phone}</p>
        <p>Sitio web: {dentista.website}</p> */}

      </div>
    </>
  );
};

export default Detail;