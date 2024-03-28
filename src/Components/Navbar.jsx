import React, { useContext } from "react";
import ThemeContext from "../context";
import { Link } from "react-router-dom";

const Navbar = () => {
  //Tema
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <nav className='' style={{color: theme.font, backgroundColor: theme.backgroundColor}}>
      {/* <p>HD Odonto</p> */}
      {/* Links a Fav y Contac */}
      <Link to = '/'> Home </Link>
      <Link to = '/Favs'> Destacados </Link>
      <Link to = '/Contact'> Contacto </Link>

      {/* Cambio de tema */}
      <button onClick={handleChangeTheme} style={{color: theme.font, backgroundColor: theme.backgroundColor}}>🌙</button>
    </nav>
  )
}

export default Navbar