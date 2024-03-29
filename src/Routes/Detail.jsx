import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../Theme";
import axios from "axios";

const Detail = () => {
  //Tema
  const { theme } = useContext(ThemeContext);

  const [dentista, setDentista] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/` + id).then((res) =>
      setDentista(res.data)
    );
  }, [id]);

  if (!dentista) {
    return <div>Espere un momento...</div>;
  }

  return (
    <>
      <div
        style={{ color: theme.font, backgroundColor: theme.background }}
      >
        <h1>Detalles </h1>
        <table>
          <caption>
            <h2>{dentista.name}</h2>
          </caption>
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
      </div>
    </>
  );
};

export default Detail;
