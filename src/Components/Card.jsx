import React, { useContext } from "react";
import ThemeContext from "../context";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {
  //Tema
  const { theme } = useContext(ThemeContext);
  
  //Fav
  const addFav = () => {
  const favoritos = JSON.parse(localStorage.getItem('favoritos') || []); //Uncaught SyntaxError: JSON.parse: unexpected end of data at line 1 column 1 of the JSON data
    favoritos.push ({name, username, id})
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
  }

  return (
    <div className="card" style={{color: theme.font, backgroundColor: theme.backgroundColor}}>
      {/* <img  src="/images/doctor.jpg" alt="" /> */}
      <Link to={`/dentist/${id}`}>{name}</Link>   
      {username}
      <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;